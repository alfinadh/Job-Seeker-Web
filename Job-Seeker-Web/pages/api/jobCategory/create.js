// jobCategoryController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { nama_category, jobId } = req.body;

  try {
    const createdCategory = await prisma.job_category.create({
      data: {
        nama_category,
        job: {
          connect: { id: jobId }
        },
      },
    });

    res.status(201).json(createdCategory);
  } catch (error) {
    console.error('Error creating job category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}