import React from "react";
import "./LiveData.css";
import reactDom from "react-dom";
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import DataMap from "./DataMap";
import LoadCountriesTask from "../../Tasks/LoadCountriesTask";

function LiveData({ dataCovid }) {
	const [content, setContent] = useState("");
	const [countries, setCountries] = useState([]);

	const load = () => {
		const loadCountriesTask = new LoadCountriesTask();
		loadCountriesTask.load(setCountries);
	};

	useEffect(load, []);

	return (
		<div className="data-map">
			<DataMap countries={countries} covidData={dataCovid} />
			<ReactTooltip>{content}</ReactTooltip>
		</div>
	);
}

export default LiveData;
