const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;
  const { nama_category, jobId } = req.body;

  try {
    const updatedCategory = await prisma.job_category.update({
      where: { id: parseInt(id, 10) },
      data: {
        nama_category,
        job: {
          connect: { id: parseInt(jobId, 10) }
        }
      },
    });

    res.json(updatedCategory);
  } catch (error) {
    console.error('Error updating job category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
