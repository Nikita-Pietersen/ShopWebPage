import React from 'react';
import Logo from "./logo.jpg";
import style from "./style.css";

function Header(){
	return(
		<div id="Pink">
		<img src={Logo} alt="heart shaped lollipops" />
		<h1>
		Pink Aesthetics <br></br>
		Where you'll find everything thats pink and cute!
		</h1>
		</div>
		);
}

export default Header;