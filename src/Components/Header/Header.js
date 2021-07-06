import React from "react";
import logo from "../../Assets/HeaderAssets/logo.svg";
import phone from "../../Assets/HeaderAssets/phone.png";
import menu from "../../Assets/HeaderAssets/icons8-menu-50.png";
import "./Header.css";
import { useState } from "react";

function Header() {
	const [openMenu, setOpenMenu] = useState(false);

	const changeMenuState = () => {
		setOpenMenu(!openMenu);
		console.log(openMenu);
	};

	return (
		<div className="header-container">
			<div className="nav">
				<div className="logo">
					<img
						className="menu-btn"
						src={menu}
						alt="menu"
						onClick={changeMenuState}
					/>
					<a href="/">
						<img className="logo" src={logo} alt="logo" />
					</a>
				</div>
				<div className="navigation">
					<ul>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/livedata">Live Data</a>
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
						<img
							className="emergency-phone"
							src={phone}
							alt="phone"
						/>
						<span>Emergency Contact</span>
					</div>
				</div>
			</div>
			<div className={!openMenu ? "open-menu-closed" : "open-menu-open"}>
				<div className="link-container">
					<a href="/about">About</a>
				</div>
				<div className="link-container">
					<a href="/about">Live Data</a>
				</div>
				<div className="link-container">
					<a href="/about">Symptoms</a>
				</div>
				<div className="link-container">
					<a href="/about">Prevention</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
