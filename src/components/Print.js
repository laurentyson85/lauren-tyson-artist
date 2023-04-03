import React from "react";

function Print({name, description, size, link, price}) {

    return (
      <div className="printListing">
        <p>{name}</p>
        {link}
        <p>{description}</p>
        <p>{size}</p>
        <p>{price}</p>
      </div>    
    );
}

export default Print;

