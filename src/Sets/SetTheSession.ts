import { NewsType } from "../Pages/Types/NewsType";
export const setTheSession = (index: number, noticias: NewsType) => {
  (sessionStorage.title = noticias?.articles[index].title),
    (sessionStorage.author = noticias?.articles[index].author),
    (sessionStorage.publishedAt = noticias?.articles[index].publishedAt),
    (sessionStorage.urlToImage = noticias?.articles[index].urlToImage),
    (sessionStorage.description = noticias?.articles[index].description),
    (sessionStorage.content = noticias?.articles[index].content);
};
