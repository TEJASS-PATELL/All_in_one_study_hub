/*
  Warnings:

  - Made the column `userId` on table `Discussion` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Roadmap" DROP CONSTRAINT "Roadmap_userId_fkey";

-- AlterTable
ALTER TABLE "Discussion" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Roadmap" ADD CONSTRAINT "Roadmap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
