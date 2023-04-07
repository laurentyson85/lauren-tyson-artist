import React from "react";

function Hat({name, link, price}) {

    return (
      <div className="hatListing">
        <br></br>
        {link}
        <p>"{name}"</p>
        <p><span style={{fontWeight: "bold"}}>Price: </span>{price}</p>
      </div>    
    );
}

export default Hat;

