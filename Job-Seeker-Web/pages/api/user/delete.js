import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.body;
      const deletedItem = await prisma.model.delete({ where: { id } });
      res.status(200).json(deletedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting item' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
