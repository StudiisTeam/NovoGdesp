/*
  Warnings:

  - A unique constraint covering the columns `[corporateName]` on the table `HiredLegalPerson` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cnpj]` on the table `HiredLegalPerson` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HiredLegalPerson_corporateName_key" ON "HiredLegalPerson"("corporateName");

-- CreateIndex
CREATE UNIQUE INDEX "HiredLegalPerson_cnpj_key" ON "HiredLegalPerson"("cnpj");
