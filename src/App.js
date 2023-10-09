import React from "react";
import Contacts from "./components/contacts";
import Education from "./components/education";
import Experience from "./components/experience/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects/projects";

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