import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Button() {
  return (
    <div className="buttons">
      <button className="emailButtons">
        <EmailIcon className="icon" fontSize="small"></EmailIcon> Email
      </button>
      <button className="linkedin">
        <LinkedInIcon className="icon" fontSize="small"></LinkedInIcon> LinkedIn
      </button>
    </div>
  );
}
