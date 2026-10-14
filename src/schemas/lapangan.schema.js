import z from "zod";

export const storelapanganschema = z.object({
    nama_lapangan: z.string().trim().min(1, 'Nama Lapangan Tidak Boleh Kosong'),
    jenis_olahraga: z.string().trim().min(1, 'Jenis Olahraga Tidak Boleh Kosong'),
    harga_per_jam: z.number().min(0, 'Harga Per Jam Tidak Boleh Kurang dari 0')
})

export const updatelapanganschema = z.object({
    nama_lapangan: z.string().trim().min(1, 'Nama Lapangan Tidak Boleh Kosong'),
    jenis_olahraga: z.string().trim().min(1, 'Jenis Olahraga Tidak Boleh Kosong'),
    harga_per_jam: z.number().min(0, 'Harga Per Jam Tidak Boleh Kurang dari 0')
})