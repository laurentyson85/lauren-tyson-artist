import React from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";
import Hats from "./Hats";
import Paintings from "./Paintings";

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
            path="paintings" 
            element={<Paintings />}
          />
          <Route 
            path="/*" 
            element={<Home />}
          />
        </Routes>
      </div>
  );
}

export default App;
