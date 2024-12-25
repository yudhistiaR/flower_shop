/*
  Warnings:

  - The values [S] on the enum `Flower_size` will be removed. If these variants are still used in the database, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Flower` DROP FOREIGN KEY `Flower_category_id_fkey`;

-- AlterTable
ALTER TABLE `Flower` MODIFY `category_id` VARCHAR(191) NULL,
    MODIFY `image` TEXT NOT NULL,
    MODIFY `size` ENUM('M', 'L', 'XL') NOT NULL;

-- AddForeignKey
ALTER TABLE `Flower` ADD CONSTRAINT `Flower_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
