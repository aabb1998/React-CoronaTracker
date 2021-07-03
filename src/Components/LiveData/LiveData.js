import React from "react";
import "./LiveData.css";
import reactDom from "react-dom";
import { useState } from "react";
import ReactTooltip from "react-tooltip";
import DataMap from "./DataMap";

function LiveData() {
	const [content, setContent] = useState("");

	return (
		<div className="data-map">
			<DataMap setToolTipContent={setContent} />
			<ReactTooltip>{content}</ReactTooltip>
		</div>
	);
}

export default LiveData;
