/*
  Warnings:

  - You are about to drop the column `cutoffTrends` on the `exam` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `privatejob` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `privatejob` table. All the data in the column will be lost.
  - Added the required column `examDate` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selectionStage` to the `PrivateJob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skills` to the `PrivateJob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `syllabus` to the `PrivateJob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tips` to the `PrivateJob` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `exam` DROP COLUMN `cutoffTrends`,
    ADD COLUMN `examDate` VARCHAR(191) NOT NULL,
    MODIFY `fees` VARCHAR(191) NOT NULL,
    MODIFY `salary` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `privatejob` DROP COLUMN `link`,
    DROP COLUMN `name`,
    ADD COLUMN `selectionStage` VARCHAR(191) NOT NULL,
    ADD COLUMN `skills` VARCHAR(191) NOT NULL,
    ADD COLUMN `syllabus` VARCHAR(191) NOT NULL,
    ADD COLUMN `tips` VARCHAR(191) NOT NULL;
