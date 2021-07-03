import React from "react";
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import reactDom from "react-dom";
import "./Map.css";
import countries from "./countries.geojson";
import { cloneDeep } from "lodash";

function DataMap({ setToolTipContent }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("./countries.geojson")
			.then((resp) => resp.json())
			.then((data) => setData(data));
	}, []);

	console.log(data);

	return (
		<>
			<h1>My Map</h1>
		</>
	);
}

export default DataMap;
