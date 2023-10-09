import React from "react";
import "./style.css";
import { CustomButton } from "..";

const HeaderCard = ({ data }) => {
	const { heading, para, background, btnLabel, btnClass, backgroundColor } = data;

	const containerStyles = {
		background: background ? `url(${background})` : "none",
		backgroundColor: backgroundColor || "transparent",
		height: "360px",
	};

	return (
		<>
			<div className="main-card" style={containerStyles}>
				<div className="heading">{heading}</div>
				<p className="para">{para}</p>
				<div className="my-2">
					<CustomButton type={"button"} themeClass={`btn ${btnClass}`} btnLabel={btnLabel} />
				</div>
				{/* <div className="car-img mx-auto mb-3">
					<img src={img} alt="" />
				</div> */}
			</div>
		</>
	);
};

export default HeaderCard;
