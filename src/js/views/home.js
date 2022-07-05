import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Personajes } from "../component/Personajes";

export const Home = () => {
	return (
	  <>
		<div className="container ">
		  <div className="div_text_home w-100 mt-5">
			<h1 className="text_home text-dark">Personajes</h1>
		  </div>
		  <div className="row scrollpersonaje">
			<Personajes className="mt-5" />
		  </div>
		  
		  
		</div>
	  </>
	);
  };
