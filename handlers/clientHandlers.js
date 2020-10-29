const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

// write your handlers here...
const getClientHandler = (req, res) => {
  if (!clients) {
    res.status(400).json({
      status: "error",
      error,
    });
  } else {
    res.status(200).json({
      status: "success",
      message: clients,
    });
  }
};

const getClientByIdHandler = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const clientId = clients.filter((client) => {
    return id === client.id;
  });
  if (clientId.length !== 1) {
    res.status(400).json({
      status: 400,
      message: "Something is wrong with ID!",
    });
  } else {
    res.status(200).json({
      status: "success",
      message: clientId,
    });
  }
};

const addClientHandler = (req, res) => {
  const clientData = req.body;

  const registered = clients.forEach((client) => {
    return client.email === clientData.email;
  });
  if (registered) {
    res.status(400).json({
      status: 400,
      message: "Sorry, this email is taken!",
    });
  } else {
    const id = uuidv4();
    clientData.id = id;
    clients.push(clientData);
    res.status(200).json({ status: 200, message: "New registration" });
  }
};

const deleteClientHandler = (req, res) => {
  const id = req.params.id;
  const clientIndex = clients.findIndex((client) => {
    return id === client.id;
  });
  if (clientIndex != -1) {
    clients.splice(clientIndex, 1);
    res.status(200).json({ status: 200, message: "client deleted" });
  } else {
    res.status(400).json({
      status: 400,
      message: "Sorry, client does not exist",
    });
  }
};

module.exports = {
  getClientHandler,
  getClientByIdHandler,
  addClientHandler,
  deleteClientHandler,
};
