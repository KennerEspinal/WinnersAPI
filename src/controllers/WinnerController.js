const WinnerModel = require('../models/WinnerModel')

const getWinners = async (req, res) => {
  try {
    const winners = await WinnerModel.find();
    res.status(200).json(winners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWinner = async (req, res) => {
  try {
    const { id } = req.params;
    const winner = await WinnerModel.findById(id);
    if (!winner) {
      return res.status(404).json(`Winner with ID: ${id} not found`);
    }
    res.status(200).json(winner);
  } catch (error) {
    res.status(500).json({ message: "An error has ocurred." });
  }
};

const createWinner = async (req, res) => {
  try {
    const winner = await WinnerModel.create(req.body);
    res.status(201).json(winner);
  } catch (error) {
    res.status(500).json({ message: "An error has ocurred." });
  }
};

const updateWinner = async (req, res) => {
  try {
    const { id } = req.params;
    const winner = await WinnerModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(winner);
  } catch (error) {
    res.status(500).json({ message: "An error has ocurred." });
  }
};

const deleteWinner = async (req, res) => {
  try {
    const { id } = req.params;
    const winner = await WinnerModel.findByIdAndDelete(id);
    if (!winner) {
      return res.status(404).json(`Winner with ID: ${id} not found`);
    }
    res.status(200).json("Winner successfully removed.");
  } catch (error) {
    res.status(500).json({ message: "An error has ocurred." });
  }
};

module.exports = {
  getWinners,
  getWinner,
  createWinner,
  updateWinner,
  deleteWinner,
};
