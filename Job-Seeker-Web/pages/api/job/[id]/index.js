const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Check if the HTTP method is not GET
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { job_id } = req.query;

  try {
    // Retrieve job by ID
    const job = await prisma.job.findUnique({
      where: { job_id: parseInt(job_id, 10) },
      select: {
        job_id: true,
        posisi_pekerjaan: true,
        deskripsi_pekerjaan: true,
        perusahaan: { select: { perusahaan_id: true, nama_perusahaan: true } },
        lokasi: true,
        gaji: true,
        jenis_pekerjaan: true,
        kategori_pekerjaan: true,
        tanggal_posting: true,
        user: { select: { user_id: true, nama_user: true } },
      },
    });

    // Check if the job was not found
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    // Send the JSON response with the job
    res.json(job);
  } catch (error) {
    // Handle errors
    console.error('Error retrieving job by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Close the Prisma client connection
    await prisma.$disconnect();
  }
}