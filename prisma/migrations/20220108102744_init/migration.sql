-- DropForeignKey
ALTER TABLE "Disbursement" DROP CONSTRAINT "Disbursement_expenseItemId_fkey";

-- DropForeignKey
ALTER TABLE "Disbursement" DROP CONSTRAINT "Disbursement_paymentMethodId_fkey";

-- DropForeignKey
ALTER TABLE "Disbursement" DROP CONSTRAINT "Disbursement_userId_fkey";

-- DropForeignKey
ALTER TABLE "expenseItem" DROP CONSTRAINT "expenseItem_userId_fkey";

-- DropForeignKey
ALTER TABLE "paymentMethod" DROP CONSTRAINT "paymentMethod_userId_fkey";

-- AddForeignKey
ALTER TABLE "Disbursement" ADD CONSTRAINT "Disbursement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disbursement" ADD CONSTRAINT "Disbursement_expenseItemId_fkey" FOREIGN KEY ("expenseItemId") REFERENCES "expenseItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disbursement" ADD CONSTRAINT "Disbursement_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "paymentMethod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenseItem" ADD CONSTRAINT "expenseItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paymentMethod" ADD CONSTRAINT "paymentMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
