import mongoose from 'mongoose'
const schema = new mongoose.Schema(
  {
    nama_lapangan: {
        type: String,
        required: true
      
    },
    jenis_olahraga: {
        type: String,
        required: true
    },
    harga_per_jam: {
        type: Number,
        required: true
    }
  }
)
const LapanganModel = mongoose.model('lapangan', schema)
export default LapanganModel