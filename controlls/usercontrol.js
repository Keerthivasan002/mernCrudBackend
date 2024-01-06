import userFrom from "../models/model.js";

export const create = async (req, res) => {
  try {
    const { username, age, email } = req.body;
    if (!username || !age || !email) {
      return res.send({ status: 0, response: "All fields are mandatory" });
    }
    const existingUser = await userFrom.findOne({ email });
    if (existingUser) {
      return res.send({ status: 1, response: "already registered" });
    }
    await userFrom.create({
      username,
      age,
      email,
    });
    return res.send({ status: 1, response: "user registered successfully" });
  } catch (error) {
    return res.send(error.message);
  }
};

export const getUserinfo = async (req, res) => {
  try {
    const { id } = req.body;
    const getInfo = await userFrom.findById({ _id: id });
    if (!getInfo) {
      return res.send({ status: 1, response: "No user found" });
    }
    return res.send({ status: 0, response: getInfo });
  } catch (error) {
    return res.send(error.message);
  }
};

export const getAll = async (req, res) => {
  try {
    const getAll = await userFrom.find();
    return res.send({ status: 0, response: getAll });
  } catch (error) {
    return res.send(error.message);
  }
};

export const deleteUserinfo = async (req, res) => {
  try {
    const { id } = req.body;
    const getinfo = await userFrom.findById({ _id: id });
    if (!getinfo) {
      return res.send({ status: 1, response: "No user found" });
    }
    await userFrom.deleteOne({ _id: getinfo._id });
    return res.send({ status: 0, response: "User info deleted" });
  } catch (err) {
    return res.send(err.message);
  }
};

export const updateInfo = async (req, res) => {
  
  try {
    const { username, age, email } = req.body;
    const { id } = req.body;
    const getUser = await userFrom.findById({ _id: id });
    if (!getUser) {
      return res.send({ status: 1, response: "No user info found" });
    }
    await userFrom.findByIdAndUpdate(
      { _id: getUser._id },
      { username, age, email }
    );
    return res.send({ status: 0, response: "user info updated" });
  } catch (err) {
    return res.send(err.message);
  }
};
