/*
  Warnings:

  - Added the required column `image` to the `Flower` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instok` to the `Flower` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Flower` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Flower` ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `instok` BOOLEAN NOT NULL,
    ADD COLUMN `size` ENUM('S', 'M', 'L', 'XL') NOT NULL;
