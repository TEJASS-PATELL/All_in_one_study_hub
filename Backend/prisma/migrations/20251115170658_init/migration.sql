-- CreateTable
CREATE TABLE `Exam` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `desc` TEXT NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `eligibility` JSON NOT NULL,
    `examDate` VARCHAR(600) NOT NULL,
    `examPattern` JSON NOT NULL,
    `fees` VARCHAR(500) NOT NULL,
    `attemptLimit` VARCHAR(500) NOT NULL,
    `salary` VARCHAR(600) NOT NULL,
    `examMode` VARCHAR(600) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrivateJob` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(600) NOT NULL,
    `desc` TEXT NOT NULL,
    `category` VARCHAR(600) NOT NULL,
    `syllabus` VARCHAR(600) NOT NULL,
    `selectionStage` VARCHAR(600) NOT NULL,
    `tips` VARCHAR(600) NOT NULL,
    `skills` VARCHAR(600) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `profilepic` VARCHAR(500) NULL,
    `lastLogin` DATETIME(3) NULL,
    `lastLogout` DATETIME(3) NULL,
    `isLogin` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `verifyOtp` VARCHAR(191) NOT NULL DEFAULT '',
    `verifyOtpExpireAt` INTEGER NOT NULL DEFAULT 0,
    `isAccountVerified` BOOLEAN NOT NULL DEFAULT false,
    `resetLink` VARCHAR(191) NOT NULL DEFAULT '',
    `resetLinkExpireAt` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roadmap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `steps` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Roadmap_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Discussion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NULL,
    `name` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `qualification` VARCHAR(191) NOT NULL,
    `examGiven` VARCHAR(191) NOT NULL,
    `examCracked` VARCHAR(191) NOT NULL,
    `jobRole` VARCHAR(191) NULL,
    `company` VARCHAR(191) NULL,
    `department` VARCHAR(191) NULL,
    `salaryPackage` VARCHAR(191) NULL,
    `advice` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `likesCount` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Like` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `discussionId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Like_userId_discussionId_key`(`userId`, `discussionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Roadmap` ADD CONSTRAINT `Roadmap_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Discussion` ADD CONSTRAINT `Discussion_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_discussionId_fkey` FOREIGN KEY (`discussionId`) REFERENCES `Discussion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
