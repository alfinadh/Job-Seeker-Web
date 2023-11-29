// pages/api/register.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { lastEdu, startDate, finishDate, grade, organization, userId } = req.body;
    try {
      const createdEducationHistory = await prisma.user_education_history.create({
        data: {
          pendidikan_terakhir: lastEdu,
          tahun_mulai: startDate,
          tahun_selesai: finishDate,
          nilai: grade,
          organisasi: organization,
          user: {
            connect: { id: userId }
          }
        }
      });
      res.json(createdEducationHistory);
    } catch (error) {
      console.error('Error creating education history:', error);
      res.status(500).json({ error: 'Failed to create education history' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

