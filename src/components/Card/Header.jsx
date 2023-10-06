import React from "react";
import "./style.css";
import { CustomButton } from "..";

const HeaderCard = ({ data }) => {
	const { heading, para, background, img, btnLabel } = data;
	return (
		<>
			<div className="main-card" style={{ background: background }}>
				<div className="heading">{heading}</div>
				<p className="para">{para}</p>
				<div>
					<CustomButton type={"button"} themeClass={`btn btn-info`} btnLabel={btnLabel} />
				</div>
			</div>
		</>
	);
};

export default HeaderCard;
