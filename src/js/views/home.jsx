import React from "react";
import Products from "../component/Products";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<h1>Ecommerce latam-24</h1>
		<Products />
		</>
	);
};

//Navbar, title, lista de productos(boton para detalles), 
// crear una carpeta veiws

export default Home;
