import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./styles.css";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="card">
      <Header />
      <Button />
      <Content />
      <Footer />
    </div>
  );
}
