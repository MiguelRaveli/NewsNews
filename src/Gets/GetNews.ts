import { endpointNews } from "../Keys/Keys";
import { NewsType } from "../Pages/Types/NewsType";

export const getNews = async (
  setNoticias: React.Dispatch<React.SetStateAction<NewsType | undefined>>
) => {
  try {
    await fetch(`${endpointNews}top-headlines?country=us&apiKey=5ef7af9dfc974eed9036334d792098e0`, )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNoticias(data);
      });
  } catch (error) {
    console.log(error);
  }
};
