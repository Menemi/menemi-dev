import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contacts from "./components/contacts";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}