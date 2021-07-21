import React from "react";
import coronaWoman from "../../Assets/SymptomsSection/corona-women.png";
import "./Symptoms.css";
import phone from "../../Assets/HeaderAssets/phone.png";

function Symptoms() {
	return (
		<div className="symptoms-section">
			<div className="main-symptom-section">
				<div className="left-side">
					<div className="text-section">
						<h2>
							Keep you and your family{" "}
							<span style={{ color: "red" }}>safe.</span>
						</h2>
						<h4>
							Check for any covid-19 related symptoms below, and
							contact emergency services if symptoms escalate.
						</h4>
					</div>
					<div className="emergency">
						<div className="emergency-section">
							<img
								className="emergency-phone"
								src={phone}
								alt="phone"
							/>
							<span>Emergency Contact</span>
						</div>
					</div>
				</div>
				<div className="right-side">
					<div className="main-img">
						<img src={coronaWoman} alt="" />
					</div>
				</div>
			</div>
			<div className="symptoms-info-section">
				<div className="main-symptom-content">
					<div className="common-info">
						<div className="img-header">
							<img src="" alt="" />
						</div>
						<div className="common-info-text">
							<h3>Common Symptoms:</h3>
							<ul>
								<li>Fever</li>
								<li>Dry Cough</li>
								<li>Fatigue</li>
							</ul>
						</div>
					</div>
					<div className="common-info">
						<div className="img-header">
							<img src="" alt="" />
						</div>
						<div className="common-info-text">
							<h3>Other Symptoms:</h3>
							<ul>
								<li>Loss of taste or smell</li>
								<li>Nasal Congestion</li>
								<li>Conjunctivitis (also known as red eyes)</li>
								<li>Sore throat</li>
								<li>Headache</li>
								<li>Muscle or joint pain</li>
								<li>Different types of skin rash</li>
								<li>Nausea or vomiting</li>
								<li>Diarrhea, chills or dizzines</li>
							</ul>
						</div>
					</div>
					<div className="common-info-severe">
						<div className="img-header">
							<img src="" alt="" />
						</div>
						<div className="common-info-text">
							<h3>Severe Symptoms:</h3>
							<ul>
								<li>Shortness of breath</li>
								<li>Loss of appetite</li>
								<li>Confusion</li>
								<li>
									Persistent pain or pressure in the chest
								</li>
								<li>High temperature (above 38°C)</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Symptoms;
