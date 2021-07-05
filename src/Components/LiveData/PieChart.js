import React from "react";
import { Pie } from "react-chartjs-2";

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
					"rgb(54, 162, 235)",
					"rgb(255, 205, 86)",
				],
				hoverOffset: 4,
			},
		],
	};
	return (
		<div>
			<Pie data={data} />
		</div>
	);
}

export default PieChart;
