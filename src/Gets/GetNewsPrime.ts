import { endpointNews } from "../Keys/Keys";
import { NewsType } from "../Pages/Types/NewsType";
export const getNewsPrime = async (
  setNoticiasPrime: React.Dispatch<React.SetStateAction<NewsType | undefined>>
) => {
  try {
    await fetch(`${endpointNews}everything?q=a&apiKey=5ef7af9dfc974eed9036334d792098e0`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNoticiasPrime(data);
      });
  } catch (error) {
    console.log(error);
  }
};
