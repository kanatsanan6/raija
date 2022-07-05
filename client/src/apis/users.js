import axios from "axios";

const url = "http://localhost:8080/api/user";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
