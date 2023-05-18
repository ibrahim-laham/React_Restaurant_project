import React from "react";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import Logo from "../assets/chef.png";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Typography><img src={Logo} alt="logo"></img>YUMMY</Typography>
      <div className="nav-item">
        <Link to="/">
          <div>
            <Typography>HOME</Typography>
          </div>
        </Link>
        <Link to="/recipe">
          <div>
            <Typography>RECIPE</Typography>
          </div>
        </Link>
        <Link to="/favorite">
          <div>
            <Typography>FAVORITE</Typography>
          </div>
        </Link>
        <Link to="/contact">
          <div>
            <Typography>CONTACT</Typography>
          </div>
        </Link>
      </div>
    </div>
  );
}

