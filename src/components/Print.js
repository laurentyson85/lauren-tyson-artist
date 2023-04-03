import React from "react";

function Print({name, description, size, link, price}) {

    return (
      <div className="printListing">
        <p><span style={{fontWeight: "bold"}}>Name: </span>{name}</p>
        <p><span style={{fontWeight: "bold"}}>Price: </span>{price}</p>
        {link}
        <p>{description}</p>
      </div>    
    );
}

export default Print;

