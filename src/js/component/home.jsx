import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [color, setColor] = useState("");
  const changeColor = () => {
	if (color === '') { 
		setColor('red');   
	  } else if (color === 'red') {
		setColor('yellow');
	  } else if (color === 'yellow') {
		setColor('green');
	  } else {
		setColor('red');
	  }
  };
  return (
    <div className="semaforo">
      <div
        className={"luz rojo" +(color === 'red' ? ' glow' : '')}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={"luz amarillo"  + (color === 'yellow' ? ' glow' : '')}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={"luz verde" + (color === 'green' ? ' glow' : '')}
        onClick={() => setColor("green")}
      ></div>
	  <button className="btn bg-primary ps-3 mt-2" onClick={() =>changeColor()}>Click me!!!</button>
    </div>
  );
};

export default Home;
