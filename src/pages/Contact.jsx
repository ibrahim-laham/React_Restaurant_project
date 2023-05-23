import React from "react";

import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <Typography variant="h5" sx={{fontWeight: 700, marginBottom: "2vh", lineHeight: "6vh"}}>Contact Us</Typography>
        <Typography paragraph variant="body1"  sx={{ display: "inline-block" }}>
          We love hearing from you! Please contact us via email address or phone
          numbers below. For answers to frequently asked questions about your
          subscription, please check out ourFAQ page.
          <span style={{ display: "block",fontWeight: 600, fontSize:"larger" }}>
            Email address:
            <span style={{ display: "inline-block",fontWeight: "normal",fontSize:"large" }}>
              ibrahemlhm@yahoo.com
            </span>
          </span>
          we will respond to your email within 72 hours.
          <span  style={{ display: "block",fontWeight: 600, fontSize:"larger" }}>
            Toll-free number:
            <span style={{ display: "inline-block",fontWeight: "normal",fontSize:"large" }}>
              855-753-1037
            </span>
          </span>
          <span style={{ display: "block",fontWeight: 600, fontSize:"larger" }}>
            International number:
            <span style={{ display: "inline-block",fontWeight: "normal",fontSize:"large" }}>
              332-239-2921
            </span>
          </span>
          hours of operation: Monday to Friday, 9 a.m to 7 p.m E.T.
        </Typography>
      </div>
    </div>
  );
}
