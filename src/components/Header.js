import React from "react";
import profileImg from "../images/profile.jpg";

export default function Header() {
  return (
    <div>
      <img src={profileImg} alt="profile" className="profileImg" />
      <div className="name">
        <h1 className="headerTitle">Shok Sinha</h1>
        <h5 className="profession">Frontend Developer</h5>
        <h6 className="email">shlokjp@gmail.com</h6>
      </div>
    </div>
  );
}
