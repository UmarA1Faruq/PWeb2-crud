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

  // Buat fungsi check Data mahasiswa (Npm)
  export const checkData = async(npm: string) => {
    // buat variabel "check"
    const check = await prisma.tb_mahasiswa.findMany({
      where: {
        npm: npm,   
      },
    });
  
    return check;
  };

  //buat fungsi simpan data
export const saveData = async(npm:string, nama:string, prodi:string) => {
  await prisma.tb_mahasiswa.create({
    data: {
      //pastikan semua field masuk kecuali field yang auto increment
      npm: npm,
      nama: nama,
      prodi: prodi,
      status: 'Y',
    },
  })
}