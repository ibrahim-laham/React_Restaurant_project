import React from "react";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

export default function NavBar({favNumber}) {
  console.log(favNumber, "favNumber");
  return (
    <div className="nav-bar">
      <div>
        <Typography className="logo-container" variant="h4">
          <img src="./assets/chef.png" alt="logo"></img>YUMMY
        </Typography>
      </div>
      <div className="nav-item">
        <Link to="/" style={{ textDecoration: "none", color: "firebrick" }}>
          <div>
            <Typography variant="h6">HOME</Typography>
          </div>
        </Link>
        <Link
          to="/recipe"
          style={{ textDecoration: "none", color: "firebrick" }}
        >
          <div>
            <Typography variant="h6">RECIPE</Typography>
          </div>
        </Link>
        <Link
          to="/favorite"
          style={{ textDecoration: "none", color: "firebrick" }}
        >
          <div>
            <Badge badgeContent={favNumber} color="primary">
              <Typography variant="h6">FAVORITE</Typography>
            </Badge>
          </div>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "firebrick" }}
        >
          <div>
            <Typography variant="h6">CONTACT</Typography>
          </div>
        </Link>
      </div>
    </div>
  );
}
