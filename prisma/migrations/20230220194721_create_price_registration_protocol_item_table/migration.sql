-- CreateTable
CREATE TABLE "PriceRegistrationProtocolItems" (
    "id" TEXT NOT NULL,
    "specification" TEXT NOT NULL,
    "observation" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "unity" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "priceRegistrationProtocolId" TEXT NOT NULL,

    CONSTRAINT "PriceRegistrationProtocolItems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PriceRegistrationProtocolItems" ADD CONSTRAINT "PriceRegistrationProtocolItems_priceRegistrationProtocolId_fkey" FOREIGN KEY ("priceRegistrationProtocolId") REFERENCES "PriceRegistrationProtocol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
