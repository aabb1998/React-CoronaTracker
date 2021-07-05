import React from "react";
import "./LiveData.css";
import reactDom from "react-dom";
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import DataMap from "./DataMap";
import LoadCountriesTask from "../../Tasks/LoadCountriesTask";
import CountryData from "./CountryData";

function LiveData({ dataCovid }) {
	const [content, setContent] = useState("");
	const [countries, setCountries] = useState([]);

	const load = () => {
		const loadCountriesTask = new LoadCountriesTask();
		loadCountriesTask.load(setCountries);
	};

	useEffect(load, []);

	return (
		<div className="container">
			<div className="data-map">
				<DataMap countries={countries} covidData={dataCovid} />
				<ReactTooltip>{content}</ReactTooltip>
			</div>
			<div className="country-data">
				<CountryData value={countries} data={dataCovid} />
			</div>
		</div>
	);
}

export default LiveData;
