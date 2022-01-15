/*
  Warnings:

  - Added the required column `expenseDate` to the `expenseItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "expenseItem" ADD COLUMN     "expenseDate" TEXT NOT NULL;
