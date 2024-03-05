import React from "react";
import "./App.css";
import Header from "./component/Header";
import Projects from "./component/Projects";
import Footer from "./component/Footer";

const  App = () =>  {
  return(
    <div className="App">
      <Header/>
      <Projects/>
      <Footer/>

    </div>
  );
}
 export default App;