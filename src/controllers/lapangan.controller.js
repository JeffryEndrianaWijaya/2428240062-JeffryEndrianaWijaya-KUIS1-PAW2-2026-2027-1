
import lapanganmodel from "../model/lapangan.model.js";
import { storelapanganschema, updatelapanganschema } from "../schemas/lapangan.schema.js";
import { apiResponse, apiResponseValidation } from "../utils/response.js";

class lapangancontroller {
  static async index(req, res) {
    const listlapangan = await lapanganmodel.find();
    return apiResponse({ res, status: 200, data: listlapangan });
  }

  static async show(req, res) {
    const lapanganid = req.params.id;
    const lapangan = await lapanganmodel.findById(lapanganid);

    if (!lapangan) {
      return apiResponse({ res, status: 404, message: 'data lapangan tidak ditemukan' });
    }

    return apiResponse({ res, status: 200, data: lapangan });
  }

  static async store(req, res) {
    const result = storelapanganschema.safeParse(req.body);
    if (!result.success) {
      return apiResponseValidation({
        res,
        errors: result.error
      });
    }
    
    const { nama_lapangan, jenis_olahraga, harga_per_jam } = result.data;

    const newlapangan = await lapanganmodel.create({ nama_lapangan, jenis_olahraga, harga_per_jam });
    return apiResponse({ res, status: 201, data: newlapangan });
  }

  static async update(req, res) {
    const lapanganid = req.params.id;
    const result = updatelapanganschema.safeParse(req.body);
    if (!result.success) {
      return apiResponseValidation({
        res,
        errors: result.error
      });
    }

    const { nama_lapangan, jenis_olahraga, harga_per_jam } = result.data;

    const exists = await lapanganmodel.exists({ _id: lapanganid });
    if (!exists) {
      return apiResponse({ res, status: 404, message: 'data lapangan tidak ditemukan' });
    }

    const updatelapangan = await lapanganmodel.findOneAndUpdate(
      { _id: lapanganid },
      { nama_lapangan, jenis_olahraga, harga_per_jam },
      { new: true }
    );

    return apiResponse({ res, status: 200, data: updatelapangan });
  }

  static async delete(req, res) {
    const lapanganid = req.params.id;

    const exists = await lapanganmodel.exists({ _id: lapanganid });
    if (!exists) {
      return apiResponse({ res, status: 404, message: 'data lapangan tidak ditemukan' });
    }

    await lapanganmodel.findOneAndDelete({ _id: lapanganid });
    return apiResponse({ res, status: 200, message: 'data lapangan berhasil dihapus', data: null });
  }
}

export default lapangancontroller;