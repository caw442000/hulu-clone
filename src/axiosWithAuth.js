import axios from "axios";

//switch to axios with auth
export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });
};
