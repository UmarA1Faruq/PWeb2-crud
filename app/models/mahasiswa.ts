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
