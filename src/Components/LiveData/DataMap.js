import React from "react";
import { useState, useEffect, useContext } from "react";
import ReactTooltip from "react-tooltip";
import reactDom from "react-dom";
import "leaflet/dist/leaflet.css";
import Geocode from "react-geocode";
import { MapContainer, GeoJSON, TileLayer, Marker, Popup } from "react-leaflet";

import "./Map.css";

function DataMap({ countries, covidData }) {
	const [data, setData] = useState([]);

	// console.log(countries[1].properties.ADMIN);

	const mapStyle = {
		fillColor: "White",
		weight: 1,
		color: "black",
		fillOpacity: 1,
	};

	const covidDataLength = covidData.Countries.length;

	const getObject = (countryFound) => {
		const objs = {
			name: null,
			TotalConfirmed: null,
			TotalRecovered: null,
			TotalDeaths: null,
		};
		for (var i = 0; i < covidData.Countries.length; i++) {
			if (
				covidData.Countries[i].Slug !== undefined &&
				countryFound !== undefined
			) {
				if (
					covidData.Countries[i].Slug.toLowerCase() ===
					countryFound.toLowerCase()
				) {
					objs.name = countryFound;
					objs.TotalConfirmed =
						covidData.Countries[i].TotalConfirmed.toLocaleString();
					objs.TotalRecovered =
						covidData.Countries[i].TotalRecovered.toLocaleString();
					objs.TotalDeaths =
						covidData.Countries[i].TotalDeaths.toLocaleString();

					console.log("found");
					return objs;
				}
			} else {
				return null;
			}
		}
		return objs;
	};

	// if (getObject('Algeria'))
	Geocode.setApiKey("AIzaSyDWUQxPTjsIEo2CIG1C5XSyXXgqzcHCTr4");

	const onEachCountry = (country, layer) => {
		const name = country.properties.ADMIN;

		layer.on("click", function (e) {
			const { lat, lng } = e.latlng;
			Geocode.fromLatLng(lat, lng).then((response) => {
				const address = response.results[0].formatted_address;
				let city, state, country;
				for (
					let i = 0;
					i < response.results[0].address_components.length;
					i++
				) {
					for (
						let j = 0;
						j <
						response.results[0].address_components[i].types.length;
						j++
					) {
						// eslint-disable-next-line default-case
						switch (
							response.results[0].address_components[i].types[j]
						) {
							case "locality":
								city =
									response.results[0].address_components[i]
										.long_name;
								break;
							case "administrative_area_level_1":
								state =
									response.results[0].address_components[i]
										.long_name;
								break;
							case "country":
								country =
									response.results[0].address_components[i]
										.long_name;
								break;
						}
					}
				}
				// console.log(country);
				let details = getObject(country);
				console.log(details);

				if (details === undefined) {
					layer.bindPopup(`<h1>No Location Found</h1>`);
				} else {
					layer.bindPopup(
						details !== null &&
							country !== undefined &&
							details.name !== null
							? `<h1>${details.name}</h1><span>Total Confirmed: ${details.TotalConfirmed}</span><br><span>Total Recovered: ${details.TotalRecovered}</span><br><span>Total Deaths: ${details.TotalDeaths}</span>`
							: `<h3 className="h3-error">Error loading data</h3>`
					);
				}

				// </h1><span>${details.TotalConfirmed}</span>
				return details;
			});
		});
	};

	return (
		<div className="map-container">
			<MapContainer
				className="map"
				center={[51.505, -0.09]}
				zoom={2}
				style={{ width: "100%", height: "100vh" }}
			>
				<GeoJSON
					style={mapStyle}
					data={countries}
					onEachFeature={onEachCountry}
				/>
			</MapContainer>
		</div>
	);
}

export default DataMap;
