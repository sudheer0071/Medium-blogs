/*
  Warnings:

  - Added the required column `imageData` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageName` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageType` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "imageData" BYTEA NOT NULL,
ADD COLUMN     "imageName" TEXT NOT NULL,
ADD COLUMN     "imageType" TEXT NOT NULL;
