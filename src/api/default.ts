import axios from "axios";
import api_url from "constants/api_url";

const instance = axios.create({
  baseURL: api_url,
});

export default instance;
