import { NewsType } from "../Pages/Types/NewsType";
export const setTheSessionPrime = (index: number, noticiasPrime: NewsType) => {
  (sessionStorage.title = noticiasPrime?.articles[index].title),
    (sessionStorage.author = noticiasPrime?.articles[index].author),
    (sessionStorage.publishedAt = noticiasPrime?.articles[index].publishedAt),
    (sessionStorage.urlToImage = noticiasPrime?.articles[index].urlToImage),
    (sessionStorage.description = noticiasPrime?.articles[index].description),
    (sessionStorage.content = noticiasPrime?.articles[index].content);
};
