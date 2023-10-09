import React from "react";
import Header from "./Components/Header";
import Herosection from "./Components/Herosection";
import Topvalue from "./Components/Topvalue";
// import Collection from "./Components/Collection";
// import Shopnow from "./Components/Shopnow";
// import Contectus from "./Components/Contectus";
// import Joinus from "./Components/Joinus";
import Explore from "./Components/Explore";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
       <Header />
      <Herosection />
       <Topvalue />

       
       <Explore/>
       <Footer/>
     {/* <Collection />
      <Shopnow />
      <Contectus />
       <Joinus/>
    
          */}
    </>
  );
}

export default App;
