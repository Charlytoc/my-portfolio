import React, { useContext, useEffect, useState } from "react";

import "../../styles/home.css";
import { axios } from "axios";

export const DatePickerComp = () => {


    const url = "https://api.cloudinary.com/v1_1/charlycloud/image/upload";
    const [imageSelected, setImageSelected] = useState('')

    const uploadImage = () => {
        let formdata = new FormData();
        formdata.append("files", imageSelected)
        formdata.append("upload_preset", "wphvk4nn");

        fetch(url, {
            method: "POST",
            body: {"files": imageSelected, "upload_preset": "wphvk4nn"}
          })
            .then((response) => {
              return response.text();
            })
    }


	return (
		<>
		<h1>Soy el componente</h1>
        {/* <input onChange={(e) => {console.log(e.target.value)}} className="fecha" type="date" /> */}
        <input type="file" onChange={(e) => {setImageSelected(e.target.files[0])}} />
        <button onClick={uploadImage}>Upload image</button>
        
        
		</>
	);
};
