/*
  Warnings:

  - Added the required column `date` to the `Disbursement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Disbursement" ADD COLUMN     "date" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
