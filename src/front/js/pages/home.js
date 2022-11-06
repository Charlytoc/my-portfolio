import React, { useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Bienvenida } from "../component/bienvenida";



export const Home = () => {
// 	const { store, actions } = useContext(Context);
// 	const [mostrar0, setMostrar0] = useState(false)
// 	const [mostrar1, setMostrar1] = useState(false)
// 	const [mostrar2, setMostrar2] = useState(false)
// 	// gsap.registerPlugin(rotatey)
	
// 	const setMostrar = (i) => {
// 		if (i = 0) {
// 			setMostrar0(true)
// 			console.log(mostrar0)
// 		}
// 		if (i = 1) {
// 			setMostrar1(true)
// 		}
// 		if (i = 2) {
// 			setMostrar2(true)
// 		}
// 	}


// 	const timeline = gsap.timeline()

// 	const animation = () => {
	  
// 	  let animables = document.querySelectorAll(".animar")
// 	//   console.log(animables[1])

// 	  timeline.from(animables, {
// 		y: -50,
// 		duration: 1,
// 		opacity: 0,
// 		stagger: 0.5
// 	  })
// 	}
  
// 	useEffect(() => {
// 	  animation();
	  
// 	}, [])
	

// 	const moverDerecha = (i) => {
// 		let elementToMove = document.querySelectorAll(".der")
// 		// let elementToShow = document.querySelector(".indexado")
		
// // 
// 		gsap.to(elementToMove[i], {
// 			x: 30, rotateX: 45, onComplete: console.log(i)
// 		})
		
		
	
// 	}
// 	const regresar = (i) => {
// 		let elementToMove = document.querySelectorAll(".der")
		
		
// 		gsap.to(elementToMove[i], {
// 			x: -30,
// 			opacity: 1, rotateX: 0
// 				})
// 	}

	return (
		<>
		<Bienvenida />
		
		</>
	);
};
