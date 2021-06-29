import React from "react";
import logo from "../../Assets/HeaderAssets/logo.svg";
import phone from "../../Assets/HeaderAssets/phone.png";
import menu from "../../Assets/HeaderAssets/icons8-menu-50.png";
import "./Header.css";

function Header() {
	return (
		<div className="header-container">
			<div className="logo">
				<img className="logo" src={logo} alt="logo" />
			</div>
			<div className="navigation">
				<ul>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/">Live Data</a>
					</li>
					<li>
						<a href="/">Symptoms</a>
					</li>
					<li>
						<a href="/">Prevention</a>
					</li>
				</ul>
			</div>
			<div className="emergency">
				<div className="emergency-section">
					<img className="emergency-phone" src={phone} alt="phone" />
					<span>Emergency Contact</span>
				</div>
				<img className="menu-btn" src={menu} alt="menu" />
			</div>
		</div>
	);
}

export default Header;
