import { NewsType } from "../../Pages/Types/NewsType";
import { setTheSessionPrime } from "../../Sets/SetTheSessionPrime";
import { Link } from "react-router-dom";
import classes from "./NewsPrime.module.css";
type PropsPrime = {
  newsPrime: NewsType;
  index: number;
};
const NewsPrime = ({ newsPrime, index }: PropsPrime) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${newsPrime?.articles[index].urlToImage})`,
        }}
        onClick={() => setTheSessionPrime(index, newsPrime!)}
        className={classes.NewsPrime}
      >
        <Link to={`/news/${newsPrime?.articles[19].title}`}>
          <h1>{newsPrime?.articles[index].title}</h1>
        </Link>
      </div>
    </>
  );
};

export default NewsPrime;
