/*
  Warnings:

  - Added the required column `updatedOn` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "updatedOn" TIMESTAMP(3) NOT NULL;
