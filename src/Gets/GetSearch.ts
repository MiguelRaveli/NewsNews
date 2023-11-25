import axios from "axios";
import { endpointNews } from "../Keys/Keys";
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
    const res = await axios.get(
      `${endpointNews}everything?q=${searchByText}&apiKey=5ef7af9dfc974eed9036334d792098e0`,
      {}
    );
    const data = res.data;
    setSearchTextResult(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
