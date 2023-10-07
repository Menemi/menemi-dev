import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Experience from "./components/experience/experience";
import Education from "./components/education";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Experience />
      <Education />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}