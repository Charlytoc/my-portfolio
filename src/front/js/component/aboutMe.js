import React, { useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import gsap from "gsap";
import { Link } from "react-router-dom";

export const AboutMe = () => {
	const { store, actions } = useContext(Context);
	const [selection, setSelection] = useState("")

	const apuntarMouse = () => {
		// console.log("asa")
	}
	return (
		<>
		<div onMouseMove={apuntarMouse} className="badge w-100 mt-4 container  fs-1">
		<h1 className="fs-1 d-inline p-2 text-dark bg-light rounded-pill" >Hola, soy Charlytoc</h1>
		
		
		<div className="col-xs-9 col-sm-8 col-md-6 p-5 m-0 col-lg-3 badge h-50 bg-light rounded-pill text-dark position-absolute top-50 start-50 translate-middle">
			<div className="col-12 mt-4"><h1 className="h-100">About me</h1>
			<div className="col-12 mt-5 badge icono text-dark h-50 position-absolute top-50 start-50 translate-middle"><ion-icon name="person-outline"></ion-icon></div></div>
		
		</div>
		</div>
		</>
	);
};
