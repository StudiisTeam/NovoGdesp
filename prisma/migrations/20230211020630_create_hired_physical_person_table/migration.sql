-- CreateTable
CREATE TABLE "HiredPhysicalPerson" (
    "id" TEXT NOT NULL,
    "aname" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
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

    CONSTRAINT "HiredPhysicalPerson_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HiredPhysicalPerson_aname_key" ON "HiredPhysicalPerson"("aname");

-- CreateIndex
CREATE UNIQUE INDEX "HiredPhysicalPerson_cpf_key" ON "HiredPhysicalPerson"("cpf");
