import React from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";
import Hats from "./Hats";
import PrintPaintings from "./PrintPaintings";
import Footer from "./Footer";
import Bio from "./Bio";

function App() {
  return (
    <div>
        <Header />
        <Nav />        
        <Routes>      
          <Route 
            path="hats" 
            element={<Hats />}
          />
          <Route 
            path="prints" 
            element={<PrintPaintings />}
          />
          <Route 
            path="bio" 
            element={<Bio />}
          />
          <Route 
            path="/*" 
            element={<Home />}
          />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
