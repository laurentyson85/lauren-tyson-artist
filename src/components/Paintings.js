import React, { useState } from "react";
import Print from "./Print";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import thisIsMontana from "../images/prints/This is Montana.jpg"
import baldEagle from "../images/prints/Bald Eagle Grey Day.jpg"
import wild from "../images/prints/In the Wild.jpg"
import indigenous from "../images/prints/Indigenous.jpg"
import horizon from "../images/prints/On the Horizon.jpg"
import wind from "../images/prints/Water and Wind.jpg"
import OnRiver from "../images/prints/On the River.jpg"
import rainbow from "../images/prints/Rainbow.jpg"
import horse from "../images/prints/Riderless Horse.jpg"
import sunsetTrout from "../images/prints/Sunset Trout.jpg"
import troutMontana from "../images/prints/Trout Montana.jpg"
import troutSkin from "../images/prints/Trout Skin.jpg"
import war from "../images/prints/War Dance.jpeg"
import ButtonMailto from "./ButtonMailto";


function Paintings() {
  
  const prints = [
    {
      id: 1,
      name: "This is Montana",
      type: "Art Print",
      description: "16 x 20 fine art print on smooth matte paper made from 100% cotton hot press paper.",
      size: "16x20",
      link: <img class="printImage" src={thisIsMontana} alt="this is montana"/>,
      price: "$35.00",
      stock: "In stock"  
  }, {
    id: 2,
    name: "Indigenous",
    type: "Art Print",
    description: "10 x 10 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "10x10",
    link: <img class="printImage" src={indigenous} alt="Indigenous"/>,
    price: "$20.00",
    stock: "In stock"         
  }, {
    id: 3,
    name: "On the River",
    type: "Art Print",
    description: "10 x 20 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "10x20",
    link: <img class="printImage" src={OnRiver} alt="On the River"/>,
    price: "$25.00",
    stock: "In stock"         
  }, {
    id: 4,
    name: "In the Wild",
    type: "Art Print",
    description: "10 x 20 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "10x20",
    link: <img class="printImage" src={wild} alt="In the Wild"/>,
    price: "$25.00",
    stock: "In stock"           
  }, {
    id: 5,
    name: "Sunset Trout",
    type: "Art Print",
    description: "10 x 20 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "10x20",
    link: <img class="printImage" src={sunsetTrout} alt="Sunset Trout"/>,
    price: "$25.00",
    stock: "In stock"           
  }, {
    id: 6,
    name: "Trout Skin",
    type: "Art Print",
    description: "10 x 20 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "10x20",
    link: <img class="printImage" src={troutSkin} alt="Trout Skin"/>,
    price: "$25.00",
    stock: "In stock"           
  }, {
    id: 7,
    name: "Rainbow",
    type: "Art Print",
    description: "10 x 20 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "10x20",
    link: <img class="printImage" src={rainbow} alt="Rainbow"/>,
    price: "$25.00",
    stock: "In stock"           
  }, {
    id: 8,
    name: "War Dance",
    type: "Art Print",
    description: "10 x 20 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "10x20",
    link: <img class="printImageSmall" src={war} alt="War Dance"/>,
    price: "$25.00",
    stock: "In stock"          
  }, {
    id: 9,
    name: "Water & Wind",
    type: "Art Print",
    description: "10 x 10 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "10x10",
    link: <img class="printImage" src={wind} alt="Water and Wind"/>,
    price: "$20.00",
    stock: "In stock"           
  }, {
    id: 10,
    name: "Bald Eagle, Grey Day",
    type: "Art Print",
    description: "16 x 20 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "16x20",
    link: <img class="printImage" src={baldEagle} alt="Bald Eagle Grey Day"/>,
    price: "$35.00",
    stock: "In stock"           
  }, {
    id: 11,
    name: "Trout Montana",
    type: "Art Print",
    description: "11 x 14 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "11x14",
    link: <img class="printImage" src={troutMontana} alt="Trout Montana"/>,
    price: "$25.00",
    stock: "In stock"           
  }, {
    id: 12,
    name: "Riderless Horse",
    type: "Art Print",
    description: "10 x 10 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "10x10",
    link: <img class="printImage" src={horse} alt="Riderless Horse"/>,
    price: "$20.00",
    stock: "In stock"           
  },
  {
    id: 13,
    name: "On the Horizon",
    type: "Art Print",
    description: "16 x 20 fine art print on smooth matte paper made from 100% cotton hot press paper.",
    size: "16x20",
    link: <img class="printImage" src={horizon} alt="On the Horizon"/>,
    price: "$35.00",
    stock: "In stock"           
  }
]

const [printPosition, setPrintPosition] = useState(0)
  const displayCount = 1    

  function handleNext(){
    setPrintPosition((printPosition + displayCount)% prints.length)
  }

  function handleBack(){
    setPrintPosition((printPosition - displayCount)% prints.length)
  }
const allPrints = prints.slice(printPosition, printPosition + displayCount).map(print => {
  return(
      <Print
      key={print.id}
      name={print.name}
      description={print.description}
      size={print.size}
      link={print.link}
      price={print.price}
      />
  )
}) 

  return (
    <>
      <div className="printText">
        <p>Use the arrows to tab through my work.</p>
        {/* <button onClick={() => window.location = 'mailto:laurentysonartist@gmail.com'}>laurentysonartist@gmail.com</button> */}
        <p>To purchase a print, please email me: <ButtonMailto label="laurentysonartist@gmail.com" mailto="laurentysonartist@gmail.com" /></p>
      </div>
      <hr
        style={{
          background: '#116600',
          color: '#116600',
          height: '.5px',
        }}
      />      
      <div className="belt">
        <div className="buttons">
          <BackButton handleBack={handleBack} printPosition={printPosition}/>
        </div>      
          {allPrints}      
          <div className="buttons">
          <NextButton handleNext={handleNext} printPosition={printPosition} prints={prints} />
        </div>
      </div>
    </>
  );
}

export default Paintings;
