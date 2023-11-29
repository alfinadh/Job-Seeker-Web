// Import the Prisma client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;

  try {
    // Retrieve job category by ID along with associated jobs
    const jobCategory = await prisma.job_category.findUnique({
      where: { id: parseInt(id, 10) },
      // Include the associated jobs
      include: { job: true },
    });

    // Check if the job category was not found
    if (!jobCategory) {
      return res.status(404).json({ error: 'Job category not found' });
    }

    // Send the JSON response with the job category
    res.json(jobCategory);
  } catch (error) {
    // Handle errors
    console.error('Error retrieving job category by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Close the Prisma client connection
    await prisma.$disconnect();
  }
}