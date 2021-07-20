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
						<h2>Keep you and your family safe.</h2>
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
		</div>
	);
}

export default Symptoms;
