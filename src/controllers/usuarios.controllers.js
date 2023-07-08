import Usuario from "../models/Usuario.models.js";


export const getAllUsuarios = async (req, res) => {
  try {
    let usuarios = await Usuario.findAll();
    res.send({ code: 200, message: "OK", usuarios });
  } catch (error) {
    res.status({ code: 500, message: error });
  }
};