import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import gsap from "gsap";


export const Home = () => {
	const { store, actions } = useContext(Context);

	
	const timeline = gsap.timeline()

	const animation = () => {
	  
	  let animables = document.querySelectorAll(".animar")
	//   console.log(animables[1])

	  timeline.from(animables, {
		y: -50,
		duration: 1,
		opacity: 0,
		stagger: 0.5
	  })
	}
  
	useEffect(() => {
	  animation();
	  
	}, [])
	

	const moverDerecha = (i) => {
		let elementToMove = document.querySelectorAll(".der")
		// let elementToShow = document.querySelector(".indexado")

// 
		gsap.to(elementToMove[i], {
			x: 30, opacity: 0.1, rotateX: 45, rotatey: 65
		})

	
	}
	const regresar = (i) => {
		let elementToMove = document.querySelectorAll(".der")
		gsap.to(elementToMove[i], {
			x: -30,
			opacity: 1, rotateX: 0, rotatey: 0
				})
	}

	return (
		<>
		<div className="container w-100 mt-3">
		{/* <h1 className="indexado text-center">Hidden text</h1> */}
		<h1 onMouseLeave={()=>{regresar(0)}} onMouseEnter={()=>{moverDerecha(0)}} className="text-center stylo animar linkear der" >Bienvenido</h1>
		
		<h1 onMouseLeave={()=>{regresar(1)}} onMouseEnter={()=>{moverDerecha(1)}}  className="text-center stylo animar der" >a mi página</h1>
		<h1 onMouseLeave={()=>{regresar(2)}} onMouseEnter={()=>{moverDerecha(2)}}  className="text-center stylo animar der" >soy Charlytoc</h1>
		</div>
		</>
	);
};
