import React, { useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { AboutMe
 } from "../component/aboutMe";
export const Home = () => {
	const { store, actions } = useContext(Context);
	const [selection, setSelection] = useState("")

	const apuntarMouse = () => {
		// console.log("asa")
	}
	return (
		<>
		<div className="row">
			<div className="col-4">
				<AboutMe />
			</div>
			<div className="col-4"></div>
			<div className="col-4"></div>
		</div>
		</>
	);
};
