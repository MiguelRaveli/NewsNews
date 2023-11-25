import axios from "axios";
import { endpointNews, keyNews } from "../Keys/Keys";
import { NewsType } from "../Pages/Types/NewsType";
export const getNewsPrime = async (
  setNoticiasPrime: React.Dispatch<React.SetStateAction<NewsType | undefined>>
) => {
  try {
    const res = await axios.get(`${endpointNews}everything?q=a`, {
      headers: {
        "X-api-key": keyNews,
      },
    });

    const data = res.data;
    setNoticiasPrime(data);
  } catch (error) {
    console.log(error);
  }
};
