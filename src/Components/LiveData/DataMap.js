import React from "react";
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import reactDom from "react-dom";
import "./Map.css";
import data from "../LiveData/countries.geojson";

import { cloneDeep } from "lodash";

function DataMap({ setToolTipContent }) {
	const [data, setData] = useState([]);

	// useEffect(() => {
	// 	fetch("")
	// 		.then((resp) => resp.json())
	// 		.then((data) => setData(data));
	// }, []);

  const info = getGeoJson()

	console.log(data);

	return (
		<>
			<h1>My Map</h1>
		</>
	);
}

export default DataMap;

