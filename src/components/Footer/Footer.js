import React from "react";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import classes from "./Footer.module.css";
import { Titles } from "../../ults/names";
const Footer = () => {
  return (
    <div className={classes.footContainer}>
      <div className={classes.titleContainer}>
        <LogoDevIcon sx={{ display: { xs: "flex", md: "none" }, mr: 0.8 }} />
        <h1>{Titles.COMPANY_NAME}</h1>
      </div>

      <div className={classes.listContainer}>
        <ul>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Notice</a>
          </li>
          <li>
            <a href="#"> Cookie Policy</a>
          </li>
        </ul>
      </div>

      <div className={classes.parentCompany}>
        <h2>FOX MEDIA</h2>
        <p>&copy; All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
