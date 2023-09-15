import React from "react";

function Print({name, size, link, price}) {

    return (
      <div className="printListing">
        <br></br>
        {link}
        <p>"{name}"</p>
        <p><span className="bold">Price: </span>{price}</p>
        <p><span className="bold">Print Size: </span>{size} in</p>     
        <br></br>
        <br></br>
      </div>    
    );
}

export default Print;

