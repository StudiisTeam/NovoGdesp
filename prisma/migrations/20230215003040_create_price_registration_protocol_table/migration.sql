-- CreateTable
CREATE TABLE "PriceRegistrationProtocol" (
    "id" TEXT NOT NULL,
    "protocolIdentifier" TEXT NOT NULL,
    "protocolYear" INTEGER NOT NULL,
    "signatureDate" TIMESTAMP(3) NOT NULL,
    "initialDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalAmountProtocol" DOUBLE PRECISION NOT NULL,
    "contractPaymentTerm" TEXT NOT NULL,
    "biddingProcessId" TEXT NOT NULL,
    "hiredPhysicalPersonId" TEXT,
    "hiredLegalPersonId" TEXT,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "PriceRegistrationProtocol_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PriceRegistrationProtocol_protocolIdentifier_key" ON "PriceRegistrationProtocol"("protocolIdentifier");

-- AddForeignKey
ALTER TABLE "PriceRegistrationProtocol" ADD CONSTRAINT "PriceRegistrationProtocol_biddingProcessId_fkey" FOREIGN KEY ("biddingProcessId") REFERENCES "BiddingProcess"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceRegistrationProtocol" ADD CONSTRAINT "PriceRegistrationProtocol_hiredPhysicalPersonId_fkey" FOREIGN KEY ("hiredPhysicalPersonId") REFERENCES "HiredPhysicalPerson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceRegistrationProtocol" ADD CONSTRAINT "PriceRegistrationProtocol_hiredLegalPersonId_fkey" FOREIGN KEY ("hiredLegalPersonId") REFERENCES "HiredLegalPerson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceRegistrationProtocol" ADD CONSTRAINT "PriceRegistrationProtocol_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
