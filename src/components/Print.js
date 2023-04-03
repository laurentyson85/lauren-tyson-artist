import React from "react";

function Print({name, description, size, link, price}) {

    return (
      <div className="printListing">
        <p>{name}</p>
        <img className ="printLink" src={link} alt="print link"/>
        <p>{description}</p>
        <p>{size}</p>
        <p>{price}</p>
      </div>    
    );
}

export default Print;

