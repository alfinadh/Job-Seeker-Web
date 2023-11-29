const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { job_id, posisi_pekerjaan, deskripsi_pekerjaan, perusahaan_id, lokasi, gaji, jenis_pekerjaan, kategori_pekerjaan, tanggal_posting, user_id } = req.body;

  try {
    // Update job based on job_id
    const updatedJob = await prisma.job.update({
      where: { job_id: parseInt(job_id, 10) },
      data: {
        posisi_pekerjaan,
        deskripsi_pekerjaan,
        perusahaan: { connect: { perusahaan_id } },
        lokasi,
        gaji,
        jenis_pekerjaan,
        kategori_pekerjaan,
        tanggal_posting,
        user: { connect: { user_id } },
      },
    });

    res.json(updatedJob);
  } catch (error) {
    // Handle errors
    console.error('Error updating job:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
}
