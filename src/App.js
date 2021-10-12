// import logo from './logo.svg';   
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
          <Route exact path="/Portfolio" component={Home}  />
          <Route exact path="/bio" component={About} />
          <Route exact path="/projects" component={Projects} />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
