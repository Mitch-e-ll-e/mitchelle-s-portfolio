import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Projects from "./component/Projects";
import Footer from "./component/Footer";
import"./App.css";
function App(){
  return(
   <div>
    <Header/>
    <Main/>
   <Projects/>
    <Footer/>
  </div> 

  
  );
}


export default App;

