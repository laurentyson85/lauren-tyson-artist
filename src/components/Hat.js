import React from "react";

function Hat({name, link, price}) {

    return (
      <div className="printListing">
        <br></br>
        {link}
        <p><span style={{fontWeight: "bold"}}>Name: </span>{name}</p>
        <p><span style={{fontWeight: "bold"}}>Price: </span>{price}</p>
        <br></br>
        <p>⏤</p>
        <br></br>
      </div>    
    );
}

export default Hat;

