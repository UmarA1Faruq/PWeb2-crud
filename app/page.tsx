"use client";

import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getData } from './models/mahasiswa';


//buat fungsi untuk dialog hapus
function setDelete(npm : string, nama : string) {
 //alert("Hapus Data ?");
 if(confirm(`Data Mahasiswa : ${npm} - ${nama} Ingin Dihapus ?`) == true)
 {
  alert("Ok");
 }
//  else
//  {
//   alert("Cancel");
//  }
}

export default function Rootpage() {
  // buat hook
  // hook dengan "use State"
  const [getValue, setValue] = useState({});

  // Buat fungsi untuk memangil  "getData"
  async function fatchData(){
    setValue(await getData());
  }
  // hook dengan "use effect"
  useEffect(() => {
    // pangil fungsi "fatchData"
    fatchData();

  }, []);

  // buat variabel mahasiswa
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
            <th className="w-10% border border-black">Aksi</th>
            <th className="w-10% border border-black">NPM</th>
            <th className="w-1/2 border border-black">Nama</th>
            <th className="w-30% border border-black">Prodi</th>
          </tr>
        </thead>
        <tbody>

          {Object.values(getValue).map((data: any, index: number) => (
            // <div key={index}>
            //   <div>
            //     {data.npm} - {data.nama} - {data.prodi}
            //   </div>
            // </div>

            <tr key={index}>
              <td className="border border-black p-2.5 text-center">
                {/* icon edit */}
                <Link href={`/edit/${btoa(data.npm)}`} className="bg-green-700 hover:bg-green-800 text-white py-2 px-2.5 rounded-full mr-1 text-sm" title="Ubah Data">
                  <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>

                {/* icon delete */}
                <Link href={"/"} className="bg-red-500 hover:bg-red-600 text-white py-2 px-2.5 rounded-full ml-1 text-sm" title="Hapus Data" onClick={() => {setDelete(data.npm, data.nama)}}>
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
