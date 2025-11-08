-- CreateTable
CREATE TABLE `Discussion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `qualification` VARCHAR(191) NOT NULL,
    `examGiven` VARCHAR(191) NOT NULL,
    `examCracked` VARCHAR(191) NOT NULL,
    `jobRole` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NULL,
    `department` VARCHAR(191) NULL,
    `salaryPackage` VARCHAR(191) NOT NULL,
    `advice` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
