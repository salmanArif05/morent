import React from "react";
import "./style.css";
import { HeaderCard } from "../../components";

const Home = () => {
	const headerData = [
		{
			heading: `The Best Platform for Car Rental`,
			para: `Ease of doing a car rental safely and
			reliably. Of course at a low price.`,
			background: "#54a6ff",
			img: "",
			btnLabel: "Rental Car",
		},
		{
			heading: `Easy way to rent a car at a low price`,
			para: `Providing cheap car rental services
			and safe and comfortable facilities.`,
			background: "#3563e9",
			img: "",
			btnLabel: "Rental Car",
		},
	];

	return (
		<>
			<header className="mt-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<HeaderCard data={headerData[0]} />
						</div>
						<div className="col-lg-6">
							<HeaderCard data={headerData[1]} />
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Home;
