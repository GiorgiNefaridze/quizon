import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com";

const networkClient = axios;

export const getSessionToken = async () => {
  const { data } = await networkClient("/api_token.php?command=request");

  return data;
};

export default networkClient;
