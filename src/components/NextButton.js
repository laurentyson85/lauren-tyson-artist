import React from "react";

function NextButton({handleNext, printPosition, prints}) {
  if (printPosition < (prints.length)-1 ){
    return (        
      <button className="navigateButtons" onClick={handleNext}>▶️</button>    
    );
  } else {
    return null
  }
}
export default NextButton;