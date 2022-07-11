import UserApiCaller from "./user-api-caller";
import axios from "axios";
import constants from "../constants";

const axiosInstance = new axios.create({
  baseURL: constants.API_BASE_URL,
});

export default function ApiCaller() {
  this.userApiCaller = new UserApiCaller({ axiosInstance });
}
