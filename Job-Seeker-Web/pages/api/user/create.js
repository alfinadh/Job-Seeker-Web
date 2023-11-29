// pages/api/register.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      email,
      username,
      name,
      address,
      phoneNumber,
      gender,
      dateOfBirth,
      joiningDate,
      password,
    } = req.body;

    try {
      // Create a new user in the database using Prisma
      const newUser = await prisma.user.create({
        data: {
          email,
          username,
          nama_lengkap: name,
          alamat: address,
          no_telp: phoneNumber,
          jenis_kelamin: gender,
          tanggal_lahir: dateOfBirth,
          tanggal_gabung: joiningDate,
          password, // Note: Hash the password in a real-world scenario
        },
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
