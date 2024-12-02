"use server";

import { PrismaClient } from "@prisma/client";

//buat variabel prisma
const prisma = new PrismaClient();

// Buat fungsi untuk mengambil data mahasiswa
export async function getData() {
    // buat variabel mahasiswa
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
      where: {
        status: "Y",
        // prodi: {
        //   contains : "formasi"
        // }
      },
    });
  
    return mahasiswa;
  }

  // buat fungsi hapus date (update status Y >> T)
  // arrow function

  // function setDelete()
  export const setUpdateStatus = async(npm: string) =>
  {
    await prisma.tb_mahasiswa.updateMany({
      where: {
        npm: npm,
      },
      data: {
        status: 'N',
      },
    });
  }