/*
  Warnings:

  - You are about to drop the column `imageData` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `imageName` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `imageType` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "imageData",
DROP COLUMN "imageName",
DROP COLUMN "imageType";
