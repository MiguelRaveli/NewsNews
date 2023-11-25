import classes from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={classes.Navbar}>
        <div className={classes.down}>
          <Link to={"/"}>
            {" "}
            <h1>NN</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
