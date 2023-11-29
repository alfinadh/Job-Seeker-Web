/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_admin` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `nama_category` on the `Job_category` table. All the data in the column will be lost.
  - Added the required column `jobId` to the `Job_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_kategory` to the `Job_category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
DROP COLUMN "id_admin",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Job_category" DROP COLUMN "nama_category",
ADD COLUMN     "jobId" INTEGER NOT NULL,
ADD COLUMN     "nama_kategory" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "posisi_pekerjaan" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "lokasi" TEXT NOT NULL,
    "gaji" TEXT NOT NULL,
    "jenis_pekerjaan" TEXT NOT NULL,
    "tgl_posting" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "nama_perusahaan" TEXT NOT NULL,
    "alamat_perusahaan" TEXT NOT NULL,
    "no_telp_perusahaan" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "tgl_gabung" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "tgl_pengajuan" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Job_category" ADD CONSTRAINT "Job_category_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
