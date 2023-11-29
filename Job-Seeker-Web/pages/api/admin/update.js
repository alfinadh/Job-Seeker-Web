const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;
  const { username, email } = req.body;

  try {
    const updateAdmin = await prisma.admin.update({
      where: { id: parseInt(id, 10) },
      data: {
        username,
        email,
      },
    });

    res.json(updateAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}