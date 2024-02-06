/*
  Warnings:

  - You are about to drop the `thread` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "thread" DROP CONSTRAINT "thread_userId_fkey";

-- DropTable
DROP TABLE "thread";

-- CreateTable
CREATE TABLE "Thread" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Thread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "objectId" TEXT NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Thread_imageUrl_key" ON "Thread"("imageUrl");

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_imageUrl_fkey" FOREIGN KEY ("imageUrl") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
