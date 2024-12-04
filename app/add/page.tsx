import React from 'react'

export default function AddPage() {
    return (
        <>
            <title>Tambah Data Mahasiswa</title>
            <div className="grid grid-cols-10 gap-4">
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
                <div className='col-span-4'>6</div>

            </div>

        </>
    )
}
