/*
  Warnings:

  - Added the required column `nama` to the `tb_mahasiswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prodi` to the `tb_mahasiswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `tb_mahasiswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_mahasiswa` ADD COLUMN `nama` VARCHAR(50) NOT NULL,
    ADD COLUMN `prodi` VARCHAR(20) NOT NULL,
    ADD COLUMN `status` ENUM('Y', 'N') NOT NULL,
    MODIFY `npm` CHAR(8) NOT NULL;

-- CreateTable
CREATE TABLE `tb_penilaian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nilai` DOUBLE NOT NULL,
    `id_mahasiswa` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_penilaian` ADD CONSTRAINT `tb_penilaian_id_mahasiswa_fkey` FOREIGN KEY (`id_mahasiswa`) REFERENCES `tb_mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
