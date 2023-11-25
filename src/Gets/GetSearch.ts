import axios from "axios";
import { endpointNews, keyNews } from "../Keys/Keys";
import { NewsType } from "../Pages/Types/NewsType";
type TSearch = {
  searchByText: string;
  setSearchTextResult: React.Dispatch<
    React.SetStateAction<NewsType | undefined>
  >;
};

export const getSearch = async ({
  searchByText,
  setSearchTextResult,
}: TSearch) => {
  try {
    const res = await axios.get(`${endpointNews}everything?q=${searchByText}`, {
      headers: {
        "X-api-key": keyNews,
      },
    });
    const data = res.data;
    setSearchTextResult(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
