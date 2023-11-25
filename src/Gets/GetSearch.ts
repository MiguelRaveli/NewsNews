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
    await fetch(
      `${endpointNews}everything?q=${searchByText}&apiKey=5ef7af9dfc974eed9036334d792098e0`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchTextResult(data);
      });
  } catch (error) {
    console.log(error);
  }
};
