/*
  Warnings:

  - Added the required column `expenseItemId` to the `Disbursement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentMethodId` to the `Disbursement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Disbursement" ADD COLUMN     "expenseItemId" INTEGER NOT NULL,
ADD COLUMN     "paymentMethodId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "expenseItem" (
    "id" SERIAL NOT NULL,
    "expenseItemName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "expenseItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paymentMethod" (
    "id" SERIAL NOT NULL,
    "paymentMethodName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "paymentMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_expenseItemTopaymentMethod" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_expenseItemTopaymentMethod_AB_unique" ON "_expenseItemTopaymentMethod"("A", "B");

-- CreateIndex
CREATE INDEX "_expenseItemTopaymentMethod_B_index" ON "_expenseItemTopaymentMethod"("B");

-- AddForeignKey
ALTER TABLE "Disbursement" ADD CONSTRAINT "Disbursement_expenseItemId_fkey" FOREIGN KEY ("expenseItemId") REFERENCES "expenseItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disbursement" ADD CONSTRAINT "Disbursement_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "paymentMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenseItem" ADD CONSTRAINT "expenseItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paymentMethod" ADD CONSTRAINT "paymentMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_expenseItemTopaymentMethod" ADD FOREIGN KEY ("A") REFERENCES "expenseItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_expenseItemTopaymentMethod" ADD FOREIGN KEY ("B") REFERENCES "paymentMethod"("id") ON DELETE CASCADE ON UPDATE CASCADE;
