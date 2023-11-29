const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;

  try {
    const admin = await prisma.admin.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!admin) {
      return res.status(404).json({ message: 'Admin Tidak Ditemukan' });
    }

    res.json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}