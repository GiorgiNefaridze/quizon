import axios from "axios";

import { type SessionTokenType } from "./src/types/sessionToken/SessionToken";

axios.defaults.baseURL = "https://opentdb.com";

const networkClient = axios;

export const getSessionToken = async (): Promise<string> => {
  const { data } = await networkClient<SessionTokenType>(
    "/api_token.php?command=request"
  );

  return data.token;
};

export default networkClient;
