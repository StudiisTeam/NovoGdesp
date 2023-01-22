-- CreateTable
CREATE TABLE "Departments" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "accountable" TEXT,
    "acronym" TEXT,
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Departments_pkey" PRIMARY KEY ("id")
);
