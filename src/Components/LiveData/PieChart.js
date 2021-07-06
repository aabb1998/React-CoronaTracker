import React from "react";
import { Pie } from "react-chartjs-2";
import "./CountryData.css";

function PieChart({ countryData }) {
	console.log(countryData);
	const data = {
		maintainAspectRatio: false,
		responsive: true,
		labels: [
			"Total Confirmed Cases",
			"Total Recovered Cases",
			"Total Death Cases",
			"Total Active Cases",
		],
		datasets: [
			{
				data: [
					countryData.totalConfirmed,
					countryData.totalRecovered,
					countryData.totalDeaths,
					countryData.totalActive,
				],
				backgroundColor: [
					"rgb(255, 99, 132)",
					"green",
					"rgb(255, 0,0)",
					"rgb(255,165,0)",
				],
				hoverOffset: 4,
			},
		],
	};
	return (
		<div className="pieChartContainer">
			<Pie data={data} />
		</div>
	);
}

export default PieChart;
