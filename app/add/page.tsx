import React, { useState } from 'react'

export default function AddPage() {
    // Buat hook (use state)
    const [getNPM, setNPM] = useState("");

    return (
        <>
            <title>Tambah Data Mahasiswa</title>
            <div className="grid grid-cols-10 gap-4 items-center">
                <div className=''>NPM</div>
                <div className='col-span-4'>
                    <input
                        type="text"
                        placeholder="Isi NPM"
                        className="input input-bordered input-primary w-full" 
                        onChange={(e) => {e.target.value}}
                    />
                </div>
                <div className='col-start-1'>Nama</div>
                <div className='col-span-4'>
                    <input
                        type="text"
                        placeholder="Isi Nama Mahasiswa"
                        className="input input-bordered input-primary w-full " />
                </div>
                <div className='col-start-1'>Prodi</div>
                <div className='col-span-4'>
                    <select defaultValue={""} className="select select-primary w-full">
                        <option value={""} disabled >Pilih Prodi Anda</option>
                        <option value={"Informatika"}>Informatika</option>
                        <option value={"Sistem Informasi"}>Sistem Informasi</option>
                        <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
                        <option value={"Teknik Komputer"}>Teknik Komputer</option>
                        
                    </select>
                </div>
                <div className='col-start-2 col-span-4'>
                <button className="btn btn-success mr-5X w-20">Simpan</button>
                <button className="btn btn-warning ml-5X w-20">Batal</button>
                </div>

            </div>

        </>
    )
}
