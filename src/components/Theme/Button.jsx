import React from "react";

const Button = ({ type, btnLabel, themeClass }) => {
	return (
		<button type={type} className={themeClass}>
			{btnLabel}
		</button>
	);
};

export default Button;
