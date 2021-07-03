import React from "react";
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import reactDom from "react-dom";
import "./Map.css";
import data from "../../Data/countries.json"


function DataMap({ setToolTipContent }) {
	const [data, setData] = useState([]);

	// useEffect(() => {
	// 	fetch("")
	// 		.then((resp) => resp.json())
	// 		.then((data) => setData(data));
	// }, []);


	console.log(data);

	return (
		<>
			<h1>My Map</h1>
		</>
	);
}

export default DataMap;

