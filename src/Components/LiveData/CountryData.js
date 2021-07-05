import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./CountryData.css";

import affectedImg from "../../Assets/MainSectionAssets/shipping 1.png";
import confirmedImg from "../../Assets/MainSectionAssets/confirmation 1.png";
import recoveredImg from "../../Assets/MainSectionAssets/recovered 1.png";
import globalImage from "../../Assets/MainSectionAssets/worldwide 1.png";
import { useState, useEffect } from "react";

function CountryData({ value, data }) {
	const [country, setCountry] = useState("Global");
	const [currentData, setCurrentData] = useState({
		country: "Global",
		totalConfirmed: (
			data.Global.NewConfirmed +
			data.Global.TotalRecovered +
			data.Global.TotalDeaths +
			data.Global.NewConfirmed
		).toLocaleString(),
		totalRecovered: data.Global.TotalRecovered.toLocaleString(),
		totalDeaths: data.Global.TotalDeaths.toLocaleString(),
		totalActive: data.Global.NewConfirmed.toLocaleString(),
	});
	const countries = ["Global"];
	const defaultOption = countries[0];

	const loadCountries = () => {
		for (let i = 0; i < data.Countries.length; i++) {
			countries.push(data.Countries[i].Country);
		}
	};
	loadCountries();

	const changeCountry = (e) => {
		if (e.value === "Global") {
			setCurrentData({
				country: "Global",
				totalConfirmed: (
					data.Global.NewConfirmed +
					data.Global.TotalRecovered +
					data.Global.TotalDeaths +
					data.Global.NewConfirmed
				).toLocaleString(),
				totalRecovered: data.Global.TotalRecovered.toLocaleString(),
				totalDeaths: data.Global.TotalDeaths.toLocaleString(),
				totalActive: data.Global.NewConfirmed.toLocaleString(),
			});
		} else {
			for (let i = 0; i < data.Countries.length; i++) {
				if (data.Countries[i].Country === e.value) {
					setCurrentData({
						country: "Global",
						totalConfirmed:
							data.Countries[i].NewConfirmed +
							data.Countries[i].TotalRecovered +
							data.Countries[i].TotalDeaths +
							data.Countries[i].NewConfirmed,
						totalRecovered:
							data.Countries[i].TotalRecovered.toLocaleString(),
						totalDeaths:
							data.Countries[i].TotalDeaths.toLocaleString(),
						totalActive:
							data.Countries[i].NewConfirmed.toLocaleString(),
					});
					return true;
				}
			}
		}
	};

	useEffect(() => {}, [currentData]);

	return (
		<div className="data-container">
			<div className="country-dropdown">
				<Dropdown
					options={countries}
					value={defaultOption}
					placeholder="Select a country"
					onChange={changeCountry}
				/>
			</div>
			<div className="country-data-container">
				<div className="totalCases">
					<img src={confirmedImg} alt="" />
					<div className="text-container">
						<h1>Total Cases</h1>
						<span style={{ color: "red", fontSize: "30px" }}>
							{currentData.totalConfirmed !== undefined
								? currentData.totalConfirmed.toLocaleString()
								: null}
						</span>
					</div>
				</div>
				<div className="totalCases">
					<img src={recoveredImg} alt="" />

					<div className="text-container">
						<h1>Total Recovered</h1>
						<span style={{ color: "green", fontSize: "30px" }}>
							{currentData.totalRecovered}
						</span>
					</div>
				</div>
				<div className="totalCases">
					<img src={globalImage} alt="" />

					<div className="text-container">
						<h1>Total Deaths</h1>
						<span style={{ color: "red", fontSize: "30px" }}>
							{currentData.totalDeaths}
						</span>
					</div>
				</div>
				<div className="totalCases">
					<img src={affectedImg} alt="" />

					<div className="text-container">
						<h1>Total Active Cases</h1>
						<span style={{ color: "red", fontSize: "30px" }}>
							{currentData.totalActive}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CountryData;
