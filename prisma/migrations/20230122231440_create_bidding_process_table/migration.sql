-- CreateTable
CREATE TABLE "BiddingProcess" (
    "id" TEXT NOT NULL,
    "processIdentifier" TEXT NOT NULL,
    "processNumber" TEXT NOT NULL,
    "processYear" INTEGER NOT NULL,
    "modalityId" INTEGER NOT NULL,
    "callingInstrument" TEXT NOT NULL,
    "object" TEXT NOT NULL,
    "executionRegime" TEXT NOT NULL,
    "guarantee" BOOLEAN NOT NULL,
    "agreement" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BiddingProcess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BiddingProcessesOnDepartments" (
    "biddingProcessId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "BiddingProcessesOnDepartments_pkey" PRIMARY KEY ("biddingProcessId","departmentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "BiddingProcess_processIdentifier_key" ON "BiddingProcess"("processIdentifier");

-- CreateIndex
CREATE UNIQUE INDEX "BiddingProcess_processNumber_key" ON "BiddingProcess"("processNumber");

-- AddForeignKey
ALTER TABLE "BiddingProcess" ADD CONSTRAINT "BiddingProcess_modalityId_fkey" FOREIGN KEY ("modalityId") REFERENCES "Modality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BiddingProcessesOnDepartments" ADD CONSTRAINT "BiddingProcessesOnDepartments_biddingProcessId_fkey" FOREIGN KEY ("biddingProcessId") REFERENCES "BiddingProcess"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BiddingProcessesOnDepartments" ADD CONSTRAINT "BiddingProcessesOnDepartments_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
