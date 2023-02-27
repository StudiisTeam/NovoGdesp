/*
  Warnings:

  - You are about to drop the `PriceRegistrationProtocolItems` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PriceRegistrationProtocolItems" DROP CONSTRAINT "PriceRegistrationProtocolItems_priceRegistrationProtocolId_fkey";

-- DropTable
DROP TABLE "PriceRegistrationProtocolItems";

-- CreateTable
CREATE TABLE "PriceRegistrationProtocolItem" (
    "id" TEXT NOT NULL,
    "specification" TEXT NOT NULL,
    "observation" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "unity" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "priceRegistrationProtocolId" TEXT NOT NULL,

    CONSTRAINT "PriceRegistrationProtocolItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PriceRegistrationProtocolItem" ADD CONSTRAINT "PriceRegistrationProtocolItem_priceRegistrationProtocolId_fkey" FOREIGN KEY ("priceRegistrationProtocolId") REFERENCES "PriceRegistrationProtocol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
