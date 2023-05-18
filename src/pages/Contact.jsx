import React from "react";

import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <Typography variant="h5" sx={{fontWeight: 700, marginBottom: "2vh", lineHeight: "6vh"}}>Contact Us</Typography>
        <Typography paragraph variant="body1" sx={{ display: "inline-block" }}>
          We love hearing from you! Please contact us via email address or phone
          numbers below. For answers to frequently asked questions about your
          subscription, please check out ourFAQ page.
          <Typography variant="h6" sx={{ display: "block",fontWeight: 600 }}>
            Email address:{" "}
            <Typography sx={{ display: "inline-block" }}>
              ibrahemlhm@yahoo.com
            </Typography>
          </Typography>
          we will respond to your email within 72 hours.
          <Typography variant="h6" sx={{ display: "block",fontWeight: 600 }}>
            Toll-free number:{" "}
            <Typography sx={{ display: "inline-block" }}>
              855-753-1037
            </Typography>{" "}
          </Typography>
          <Typography variant="h6" sx={{ display: "block",fontWeight: 600 }}>
            International number:{" "}
            <Typography sx={{ display: "inline-block" }}>
              332-239-2921
            </Typography>{" "}
          </Typography>{" "}
          hours of operation: Monday to Friday, 9 a.m to 7 p.m E.T.
        </Typography>
      </div>
    </div>
  );
}
