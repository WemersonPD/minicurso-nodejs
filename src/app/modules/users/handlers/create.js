const users = require("../../../../database/");

const valideFields = (body) => {
  const { name, id, idade } = body;

  const errors = [];

  if (!name) {
    errors.push({
      field: "name",
      message: "Este valor é obrigatótio",
    });
  }

  if (!id) {
    errors.push({
      field: "id",
      message: "Este valor é obrigatótio",
    });
  }

  if (!idade) {
    errors.push({
      field: "idade",
      message: "Este valor é obrigatótio",
    });
  }

  return errors;
};

module.exports = (req, res) => {
  const body = req.body;
  const isValidFields = valideFields(body);
  if (isValidFields.length > 0) {
    res.status(400).json({
      error: true,
      message: "Dados inválidos",
      data: isValidFields,
    });
  }

  users.push(body);
  res.status(200).json({
    error: false,
    message: "Usuário cadastrado com sucesso",
    data: users,
  });
};
