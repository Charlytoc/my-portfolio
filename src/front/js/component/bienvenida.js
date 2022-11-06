import React from "react";
import { Link } from "react-router-dom";

export const Bienvenida = () => {


	return (
		<>
        <div  className="container align-items-center ">
            <div className="gato container align-items-center mt-5">
                <div className="row orejas">
                    <div id="separador-de-orejas" className="espacio"></div>
                </div>
                <div className="row ojos">
                    <div className="ojo-1" id="ojo-1">
                        <div id="pupi" className="pupila-1"></div>
                    </div>
                    <div className="ojo-2" id="ojo-2">
                    <div className="pupila-2"></div>
                    </div>
                </div>
                <div className="row mandibula">
                    <div className="boca"></div>
                </div>
            </div>

        </div>


        
        
        </>
	);
};
