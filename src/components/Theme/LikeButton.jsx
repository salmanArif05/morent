import React from "react";

const LikeButton = ({ className, fav }) => {
	return <button className={className}>{fav ? "Yes" : "No"}</button>;
};

export default LikeButton;
