const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;

  try {
    await prisma.job_category.delete({
      where: { id: parseInt(id, 10) },
    });

    res.json({ message: 'Job category deleted successfully' });
  } catch (error) {
    console.error('Error deleting job category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}