import React from "react";
import "./style.css";
import { CustomButton } from "..";

const HeaderCard = ({ data }) => {
	const { heading, para, background, img, btnLabel, btnClass } = data;
	return (
		<>
			<div className="main-card" style={{ background: background }}>
				<div className="heading">{heading}</div>
				<p className="para">{para}</p>
				<div>
					<CustomButton type={"button"} themeClass={`btn ${btnClass}`} btnLabel={btnLabel} />
				</div>
				<div className="car-img mx-auto">
					<img src={img} alt="" />
				</div>
			</div>
		</>
	);
};

export default HeaderCard;
