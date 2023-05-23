import React from "react";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

export default function NavBar({ favoritesList }) {
  return (
    <div className="nav-bar">
      
      <Link to="/" style={{ textDecoration: "none", color: "firebrick" }}>
        <div>
          <Typography className="logo-container" variant="h4">
            <img src="./assets/chef.png" alt="logo"></img>YUMMY
          </Typography>
        </div>
      </Link>

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
            <Badge badgeContent={favoritesList.length} color="primary">
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
