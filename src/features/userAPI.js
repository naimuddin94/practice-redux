import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("http://localhost:5000/users");
  return response;
};

export const createUser = async (user) => {
  const response = await axios.post("http://localhost:5000/users/create", user);
  return response;
};
