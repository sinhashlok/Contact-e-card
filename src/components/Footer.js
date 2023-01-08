import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer>
      <TwitterIcon className="icons" fontSize="large" />
      <FacebookIcon className="icons" fontSize="large" />
      <InstagramIcon className="icons" fontSize="large" />
      <GitHubIcon className="icons" fontSize="large" />
    </footer>
  );
}
