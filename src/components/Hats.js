import React from "react";
import Hat from "./Hat";
import anglers_choice from "../images/hats/anglers_choice.jpeg"
import brook_trout_fish_skin from "../images/hats/brook_trout_fish_skin.jpg"
import comin_up_for_air from "../images/hats/comin_up_for_air.jpeg"
import cutthroat_trout_skin_hat from "../images/hats/cutthroat_trout_skin_hat.jpg"
import gone_fishin from "../images/hats/gone_fishin.jpg"
import ice_cold_fishing from "../images/hats/ice_cold_fishing.jpg"
import montana_brown from "../images/hats/montana_brown.jpg"
import montana_flies from "../images/hats/montana_flies.jpg"
import montana_westslope from "../images/hats/montana_westslope.jpg"
import rainbow_trout_skin_hat from "../images/hats/rainbow_trout_skin_hat.jpg"
import royal_pmx from "../images/hats/royal_pmx.jpg"
import trout_and_stripes_forever from "../images/hats/trout_and_stripes_forever.jpg"


function Hats() {

  const hats = [
    {
      id: 1,
      name: "Angler's Choice",
      type: "Original Hand Painted Hat",
      link: <img class="hatImage" src={anglers_choice} alt="Angler's Choice"/>,
      price: "$45.00",
      stock: "In stock"  
  }, {
    id: 2,
    name: "Brook Trout Fish Skin",
    type: "Original Hand Painted Hat",
    link: <img class="hatImage" src={brook_trout_fish_skin} alt="Brook Trout Fish Skin"/>,
    price: "$45.00",
    stock: "In stock"         
  }, {
    id: 3,
    name: "Comin' Up For Air",
    type: "Original Hand Painted Hat",
    link: <img class="hatImage" src={comin_up_for_air} alt="Comin' Up For Air"/>,
    price: "$45.00",
    stock: "In stock"         
  }, {
    id: 4,
    name: "Cutthroat Trout Skin Hat",
    type: "Original Hand Painted Hat",
    link: <img class="hatImage" src={cutthroat_trout_skin_hat} alt="Cutthroat Trout Skin Hat"/>,
    price: "$45.00",
    stock: "In stock"           
  }, {
    id: 5,
    name: "Gone Fishin",
    type: "Original Hand Painted Hat",
    link: <img class="hatImage" src={gone_fishin} alt="Gone Fishin"/>,
    price: "$45.00",
    stock: "In stock"           
  }, {
    id: 6,
    name: "Ice Cold Fishing",
    type: "Original Hand Painted Hat",
    link: <img class="hatImage" src={ice_cold_fishing} alt="Ice Cold Fishing"/>,
    price: "$45.00",
    stock: "In stock"           
  }, {
    id: 7,
    name: "Montana Brown",
    type: "Original Hand Painted Hat",
    link: <img class="hatImage" src={montana_brown} alt="Montana Brown"/>,
    price: "$45.00",
    stock: "In stock"           
  }, {
    id: 8,
    name: "Montana Flies",
    type: "Original Hand Painted Hat",
    link: <img class="hatImage" src={montana_flies} alt="Montana Flies"/>,
    price: "$45.00",
    stock: "In stock"          
  }, {
    id: 9,
    name: "Montana Westslope",
    type: "Original Hand Painted Hat",
    link: <img class="hatImage" src={montana_westslope} alt="Montana Westslope"/>,
    price: "$45.00",
    stock: "In stock"           
  }, {
    id: 10,
    name: "Rainbow Trout Skin Hat",
    type: "Original Hand Painted Hat",
    link: <img class="hatImage" src={rainbow_trout_skin_hat} alt="Rainbow Trout Skin Hat"/>,
    price: "$45.00",
    stock: "In stock"           
  }, {
    id: 11,
    name: "Royal PMX",
    type: "Original Hand Painted Hat",
    link: <img class="hatImage" src={royal_pmx} alt="Royal PMX"/>,
    price: "$45.00",
    stock: "In stock"           
  }, {
    id: 12,
    name: "Trout and Stripes Forever",
    type: "Original Hand Painted Hat",
    link: <img class="hatImage" src={trout_and_stripes_forever} alt="Trout and Stripes Forever"/>,
    price: "$45.00",
    stock: "In stock"           
  }
]


const allHats = hats.map(hat => {
  return(
      <Hat
      key={hat.id}
      name={hat.name}
      link={hat.link}
      price={hat.price}
      />
  )
}) 

  return (
    <>
      <div className="printText">
        <p>Structured snapback trucker style fishing hat. Treated with an odorless fabric protector. Acrylic paint. 100% Polyester</p>
        <p>To purchase an original hat, please email me: laurentysonartist@gmail.com</p>
      </div>
      <hr
        style={{
          background: '#116600',
          color: '#116600',
          height: '.5px',
        }}
      />      
      <div className="hatCards">
          {allHats}  
      </div>
    </>
  );
}

export default Hats;
