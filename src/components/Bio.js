import React from "react";
import headshot from "../images/headshot.jpeg"


function Bio() {

  return (
    <>
    <div className="float">
        <div className="floatChild">
          <p>I've been an artist since I was little. Four or five years old, I sat on my grandmother's sewing room floor, picking up things and putting them together. Fast forward through my childhood and teenage years, crafting and sewing became drawing and painting.</p>
          <p>I've never gone to art school; trial and error is my teacher. I have a knack for looking at something and knowing how to recreate it - the ratios, color combinations, and perspective. I love to paint because it's my way of capturing beauty.</p>
        </div>
        <div className="floatChild">          
          <img id="headshotImg" class="headshot" src={headshot} alt="Lauren Headshot"/>
        </div>
    </div>
    <div className="bioTextSecondBlock">
        <p>As an adult, I moved from the midwest to Montana. I love adventure, I love the outdoors, and I wanted a slower pace. Years later, I've never left. I embraced Montana and its natural way of life. I married a fly fisherman and we bought a home on the river. Soon, his love for the beautiful waters of Montana became mine. We spend most of our time outdoors with our dogs; fly fishing, camping, hiking, and just walking the river bank.</p>
        <p>As an artist, Montana is the perfect place for inspiration. I make it my job to capture, paint, and share my experiences with others. But it's hard. How do you harness a vast place like Montana in a painting? The colorful fish visible beneath crystal clear glacial waters. The staggering Rocky Mountains are so massive that they're hard to take in. The rugged forest and vast fields go on for miles. It's all so.....big. But this is my life, and I love it.</p>
        <p>Now, I feel like a kid again when things were fun and simple, sitting on my grandmother's floor. All the art that I create is a little bit of wild and wonderful Montana, made with love.</p>
    </div>
    </>
  );
}

export default Bio;
