import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import { DatePickerComp } from "../component/datePicker";

export const About = () => {
	const { store, actions } = useContext(Context);

	
    
	return (
		<>
        <DatePickerComp />
		
		</>
	);
};
