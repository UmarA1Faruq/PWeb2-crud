import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrismaClient } from '@prisma/client'
import Link from 'next/link';
import React from 'react'

//buat variabel prisma
const prisma = new PrismaClient();
export default async function Rootpage() {

  // buat variabel mahasiswa
  const mahasiswa = await prisma.tb_mahasiswa.findMany({
    where: {
      status: "Y",
    },
  })

  // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
  //   where: {
  //     id: 17,
  //   },
  // })

  return (
    <>
      {/* tampilkan data mahasiswa */}
      <table className="w-full">
        <thead>
          <tr className="bg-slate-300 h-12">
            <th className="w-10% border-2 border-black">Aksi</th>
            <th className="w-10% border border-black">NPM</th>
            <th className="w-1/2 border border-black">Nama</th>
            <th className="w-30% border border-black">Prodi</th>
          </tr>
        </thead>
        <tbody>

          {mahasiswa.map((data: any, index: number) => (
            // <div key={index}>
            //   <div>
            //     {data.npm} - {data.nama} - {data.prodi}
            //   </div>
            // </div>

            <tr>
              <td className="border border-black p-2.5 text-center">
                {/* icon edit */}
                <Link href={"/"} className="bg-green-700 hover:bg-green-800 text-white py-2 px-2.5 rounded-full mr-1 text-sm" title="Ubah Data">
                  <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>

                {/* icon delete */}
                <Link href={"/"} className="bg-red-500 hover:bg-red-600 text-white py-2 px-2.5 rounded-full ml-1 text-sm" title="Hapus Data">
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Link>


              </td>
              <td className="border border-black px-2.5 text-center">{data.npm}</td>
              <td className="border border-black px-2.5 text-justify">{data.nama}</td>
              <td className="border border-black px-2.5 text-center">{data.prodi}</td>
            </tr>

          ))}
        </tbody>
      </table>

      {/* {mahasiswa?.nama} */}

    </>
  )
}
