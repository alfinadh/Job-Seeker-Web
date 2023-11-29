const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Define your endpoint function
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Retrieve job categories along with associated jobs
    const jobCategories = await prisma.job_category.findMany({
      // Include associated jobs
      include: { job: true },
    });

    // Send JSON response with job categories
    res.json(jobCategories);
  } catch (error) {
    // Handle errors
    console.error('Error retrieving job categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
}