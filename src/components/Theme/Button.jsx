import React from "react";

const Button = ({ type, text, themeClass }) => {
	return (
		<button type={type} className={themeClass}>
			{text}
		</button>
	);
};

export default Button;
