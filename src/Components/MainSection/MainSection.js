import React from "react";
import "./MainSection.css";
import info from "../../Assets/MainSectionAssets/info 1.png";
import covidAlert from "../../Assets/MainSectionAssets/Group 3.png";
import coverImg from "../../Assets/MainSectionAssets/family 1.png";
import affectedImg from "../../Assets/MainSectionAssets/shipping 1.png";
import confirmedImg from "../../Assets/MainSectionAssets/confirmation 1.png";
import recoveredImg from "../../Assets/MainSectionAssets/recovered 1.png";
import globalImage from "../../Assets/MainSectionAssets/worldwide 1.png";
import CountUp from "react-countup";
import { useEffect } from "react";

function MainSection({ covidData, load }) {
	console.log(covidData);
	const confirmedCases = covidData.Global.TotalConfirmed;
	const recoveredCases = covidData.Global.TotalRecovered;
	const deathCases = covidData.Global.TotalDeaths;

	return (
		<div className="main">
			<div className="main-section">
				<div className="main-left">
					<div className="alert-btn">
						<img src={covidAlert} alt="info" />
					</div>
					<div className="main-text">
						<h2>Save yourself.</h2>
						<h2 className="h2-text">Save the world.</h2>
						<span>
							Coronavirus disease (COVID-19) is an infectious
							disease caused by a newly discovered coronavirus.
							Most people who fall sick with COVID-19 will
							experience mild to moderate symptoms and recover
							without special treatment.
						</span>
					</div>
					<div className="symptoms-btn">
						<span>Check Symptoms</span>
					</div>
				</div>
				<div className="cover-img">
					<img className="cover" src={coverImg} alt="" />
				</div>
			</div>
			<div className="global-stats">
				<div className="stat">
					<h3 style={{ color: "red" }}>
						<CountUp
							style={{ color: "red" }}
							start={0}
							end={220}
							duration={1.3}
							separator=","
						/>
					</h3>
					<span>Affected Countries</span>
					<img src={affectedImg} alt="" />
				</div>
				<div className="stat">
					<h3 style={{ color: "red" }}>
						<CountUp
							style={{ color: "red" }}
							start={0}
							end={confirmedCases}
							duration={1.3}
							separator=","
						/>
					</h3>
					<span>Confirmed Cases</span>
					<img src={confirmedImg} alt="" />
				</div>
				<div className="stat">
					<h3 style={{ color: "green" }}>
						<CountUp
							style={{ color: "green" }}
							start={0}
							end={recoveredCases}
							duration={1.3}
							separator=","
						/>
					</h3>
					<span>Recovered Cases</span>
					<img src={recoveredImg} alt="" />
				</div>
				<div className="stat">
					<h3 style={{ color: "red" }}>
						<CountUp
							style={{ color: "red" }}
							start={0}
							end={deathCases}
							duration={1.3}
							separator=","
						/>
					</h3>
					<span>Global Deaths</span>
					<img src={globalImage} alt="" />
				</div>
			</div>
			<div className="disclaimer">
				<p>* All live statistics updated every 15 minutes.</p>
			</div>
		</div>
	);
}

export default MainSection;

// div all component
// div (main section)
// 	div (left section)
// 		alert
//	Text
//  Text
//  div
//	div (right section)
//	image

// div (stats section)
