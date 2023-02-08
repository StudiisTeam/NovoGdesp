-- CreateTable
CREATE TABLE "HiredLegalPerson" (
    "id" TEXT NOT NULL,
    "corporateName" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "color" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "codeBank" INTEGER,
    "nameBank" TEXT,
    "agencyBank" INTEGER,
    "accountBank" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HiredLegalPerson_pkey" PRIMARY KEY ("id")
);
