import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { id, data } = req.body;
      const updatedItem = await prisma.model.update({
        where: { id },
        data,
      });
      res.status(200).json(updatedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating item' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
