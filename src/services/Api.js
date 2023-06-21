import axios from "axios";
import store from "@/store/index";

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_SERVER || `http://localhost:8081/`,
    headers: {
      Authorization: `Bearer ${store.state.auth.token}`,
    },
  });
};
