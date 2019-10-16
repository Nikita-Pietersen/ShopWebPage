import React from 'react';
import style from "./style.css";
import Heels from "./heels.jpg";
import Paws from "./paws.jpg";
import Bracelet from "./bracelet.webp";

function Products(){
	return(
		<p>
		<h1>Products : </h1>
		<div id="oneA">
		<img src={Heels} alt="heels"/>
		<br></br>
		Look at how shic these heels are! AND THEY'RE <strong>PINK!</strong>
		<br></br>
		Price : R750
		<br></br>
		<br></br>
		</div>
		<div id="oneB">
		<img src={Paws} alt="paws"/>
		<br></br>
		Look at how cute this is for your doggy are! AND THEY'RE (once again) <strong>PINK!</strong>
		<br></br>
		Price : R350
		<br></br>
		<br></br>
		</div>
		<div id="oneC">
		<img src={Bracelet} alt="bracelet"/>
		<br></br>
		Look at how gorgeous this bracelet is! AND THEY'RE (for the last time) <strong>PINK!</strong>
		<br></br>
		Price : R1050
		<br></br>
		<br></br>
		</div>

		<br></br><br></br>
		<h1>Services : </h1>
		Customize your own mug or t-shirt!<br></br>
		Prices may vary depending on the custom order received!
		<br></br><br></br>
		<br></br><br></br>
		<footer>
		Copyright of Pink Aesthetics
		</footer>
		</p>
		);
}

export default Products;