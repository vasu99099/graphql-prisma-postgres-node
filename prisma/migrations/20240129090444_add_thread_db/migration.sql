-- CreateTable
CREATE TABLE "thread" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "thread_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "thread" ADD CONSTRAINT "thread_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
