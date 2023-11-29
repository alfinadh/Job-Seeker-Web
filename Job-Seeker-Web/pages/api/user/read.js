import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const items = await prisma.model.findMany();
      res.status(200).json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching items' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
