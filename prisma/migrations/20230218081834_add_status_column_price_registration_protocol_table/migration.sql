-- CreateEnum
CREATE TYPE "PriceRegistrationProtocolStatus" AS ENUM ('INUSE', 'UNUSED', 'CANCELED');

-- AlterTable
ALTER TABLE "PriceRegistrationProtocol" ADD COLUMN     "status" "PriceRegistrationProtocolStatus" NOT NULL DEFAULT 'UNUSED';
