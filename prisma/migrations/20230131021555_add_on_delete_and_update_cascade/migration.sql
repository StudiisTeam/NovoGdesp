-- DropForeignKey
ALTER TABLE "BiddingProcessesOnDepartments" DROP CONSTRAINT "BiddingProcessesOnDepartments_biddingProcessId_fkey";

-- DropForeignKey
ALTER TABLE "BiddingProcessesOnDepartments" DROP CONSTRAINT "BiddingProcessesOnDepartments_departmentId_fkey";

-- AddForeignKey
ALTER TABLE "BiddingProcessesOnDepartments" ADD CONSTRAINT "BiddingProcessesOnDepartments_biddingProcessId_fkey" FOREIGN KEY ("biddingProcessId") REFERENCES "BiddingProcess"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BiddingProcessesOnDepartments" ADD CONSTRAINT "BiddingProcessesOnDepartments_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
