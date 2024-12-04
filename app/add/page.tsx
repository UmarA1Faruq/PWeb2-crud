import React from 'react'

export default function AddPage() {
    return (
        <>
            <title>Tambah Data Mahasiswa</title>
            <div className="grid grid-cols-10 gap-4 items-center">
                <div className=''>NPM</div>
                <div className='col-span-4'>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='col-start-1'>Nama</div>
                <div className='col-span-4'>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='col-start-1'>Prodi</div>
                <div className='col-span-4'>
                    <select className="select select-primary w-full max-w-xs">
                        <option disabled selected>Pilih Prodi Anda</option>
                        <option>Informatika</option>
                        <option>Sistem Informasi</option>
                        
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
