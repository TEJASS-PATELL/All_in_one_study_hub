/*
  Warnings:

  - Added the required column `attemptLimit` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cutoffTrends` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `examMode` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salary` to the `Exam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `exam` ADD COLUMN `attemptLimit` INTEGER NOT NULL,
    ADD COLUMN `cutoffTrends` JSON NOT NULL,
    ADD COLUMN `examMode` VARCHAR(191) NOT NULL,
    ADD COLUMN `salary` JSON NOT NULL;
