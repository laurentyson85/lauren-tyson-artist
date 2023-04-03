import React from "react";

function BackButton({handleBack, printPosition}) {  
  if (printPosition > 0){
    return (        
      <button className="navigateButtons" onClick={handleBack}>◀️</button>    
    );
  } else {
    return null
  }
  
}
export default BackButton;