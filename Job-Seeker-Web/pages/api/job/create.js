const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    posisi_pekerjaan,
    deskripsi_pekerjaan,
    perusahaan_id,
    lokasi,
    gaji,
    jenis_pekerjaan,
    kategori_pekerjaan,
    tanggal_posting,
    user_id,
  } = req.body;

  try {
    const createdJob = await prisma.job.create({
      data: {
        posisi_pekerjaan,
        deskripsi_pekerjaan,
        perusahaan: { connect: { id: perusahaan_id } },
        lokasi,
        gaji,
        jenis_pekerjaan,
        kategori_pekerjaan,
        tanggal_posting,
        user: { connect: { id: user_id } },
      },
    });

    res.status(201).json(createdJob);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}