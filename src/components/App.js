import React from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";

function App() {
  return (
    <div>
        <Header />
        <Nav />        
        <Routes>      
          <Route 
            path="/*" 
            element={<Home />}
          />
        </Routes>
      </div>
  );
}

export default App;
