import React from "react";

function Print({name, size, link, price}) {

    return (
      <div className="printListing">
        <br></br>
        {link}
        <p><span style={{fontWeight: "bold"}}>Name: </span>{name}</p>
        <p><span style={{fontWeight: "bold"}}>Price: </span>{price}</p>
        <p><span style={{fontWeight: "bold"}}>Print Size: </span>{size} in</p>     
        <br></br>
        <p>⏤</p>
        <br></br>
      </div>    
    );
}

export default Print;

