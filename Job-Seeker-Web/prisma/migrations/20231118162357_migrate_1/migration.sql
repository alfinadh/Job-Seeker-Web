-- CreateEnum
CREATE TYPE "JenisKelamin" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "nama_lengkap" VARCHAR(50),
    "alamat" VARCHAR(255) NOT NULL,
    "no_telp" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "tanggal_lahir" DATE NOT NULL,
    "tanggal_gabung" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_education_history" (
    "id" SERIAL NOT NULL,
    "pendidikan_terakhir" TEXT NOT NULL,
    "tahun_mulai" TIMESTAMP(3) NOT NULL,
    "tahun_selesai" TIMESTAMP(3) NOT NULL,
    "nilai" DOUBLE PRECISION NOT NULL,
    "organisasi" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "User_education_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_job_history" (
    "id" SERIAL NOT NULL,
    "pekerjaan_terdahulu" TEXT NOT NULL,
    "perusahaan_terdahulu" TEXT NOT NULL,
    "tahun_mulai" TIMESTAMP(3) NOT NULL,
    "tahun_selesai" TIMESTAMP(3) NOT NULL,
    "pengalaman_kerja" TEXT NOT NULL,
    "keahlian" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "User_job_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id_admin" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "Job_category" (
    "id" SERIAL NOT NULL,
    "nama_category" TEXT NOT NULL,

    CONSTRAINT "Job_category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User_education_history" ADD CONSTRAINT "User_education_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_job_history" ADD CONSTRAINT "User_job_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
