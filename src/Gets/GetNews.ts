import { endpointNews, keyNews } from "../Keys/Keys";
import { NewsType } from "../Pages/Types/NewsType";
import axios from "axios";
export const getNews = async (
  setNoticias: React.Dispatch<React.SetStateAction<NewsType | undefined>>
) => {
  try {
    const res = await axios.get(`${endpointNews}top-headlines?country=us`, {
      headers: {
        "X-api-key": keyNews,
      },
    });
    const data = res.data;
    setNoticias(data);
  } catch (error) {
    console.log(error);
  }
};
