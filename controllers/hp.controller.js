const Hp = require("../models/Hp");

const addHp = async (req, res) => {
  try {
    const hp = await Hp.create(req.body);
    res.status(201).json(hp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    process.exit(1);
  }
};

const getHps = async (req, res) => {
  try {
    const hps = await Hp.find();
    res.status(200).json(hps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    process.exit(1);
  }
};

const getHp = async (req, res) => {
  try {
    const id = req.params.id;
    const hp = await Hp.findById(id);
    if (hp === null) {
      res.status(404).json({ message: "Hp not found!" });
      return;
    }
    res.status(200).json(hp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    process.exit(1);
  }
};

const updateHp = async (req, res) => {
  try {
    const id = req.params.id;
    const hp = await Hp.findByIdAndUpdate(id, req.body, { new: true });
    if (hp === null) {
      res.status(404).json({ message: "Hp not found!" });
      return;
    }
    res.status(201).json(hp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    process.exit(1);
  }
};

const deleteHp = async (req, res) => {
  try {
    const id = req.params.id;
    const hp = await Hp.findByIdAndDelete(id);
    if (hp === null) {
      res.status(404).json({ message: "Hp not found!" });
      return;
    }
    res.status(200).json({ message: "hp successfully deleted!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    process.exit(1);
  }
};

module.exports = {
  addHp,
  getHps,
  getHp,
  updateHp,
  deleteHp,
};
