import React from "react";
import "./style.css";
import { HeaderCard, ProductCard, SearchCard } from "../../components";
import { TbArrowsSort } from "react-icons/tb";

const Home = () => {
	const headerData = [
		{
			heading: `The Best Platform for Car Rental`,
			para: `Ease of doing a car rental safely and
			reliably. Of course at a low price.`,
			background: "#54a6ff",
			img: "/assets/car.png",
			btnLabel: "Rental Car",
			btnClass: "btn-primary-morent",
		},
		{
			heading: `Easy way to rent a car at a low price`,
			para: `Providing cheap car rental services
			and safe and comfortable facilities.`,
			background: "#3563e9",
			img: "/assets/car.png",
			btnLabel: "Rental Car",
			btnClass: "btn-secondary-morent",
		},
	];

	const productData = [
		{
			carTitle: "Koenigsegg",
			carCategory: "Sport",
			fav: true,
			salePrice: true,
		},
		{
			carTitle: "Aston Martin",
			carCategory: "Sport",
			fav: false,
			salePrice: false,
		},
		{
			carTitle: "Koenigsegg",
			carCategory: "Sport",
			fav: true,
			salePrice: true,
		},
		{
			carTitle: "Aston Martin",
			carCategory: "Sport",
			fav: false,
			salePrice: false,
		},
	];

	const recomendCar = [
		{
			carTitle: "Koenigsegg",
			carCategory: "Sport",
			fav: true,
			salePrice: true,
		},
		{
			carTitle: "Aston Martin",
			carCategory: "Sport",
			fav: false,
			salePrice: false,
		},
		{
			carTitle: "Koenigsegg",
			carCategory: "Sport",
			fav: true,
			salePrice: true,
		},
		{
			carTitle: "Aston Martin",
			carCategory: "Sport",
			fav: false,
			salePrice: false,
		},
		{
			carTitle: "Koenigsegg",
			carCategory: "Sport",
			fav: true,
			salePrice: true,
		},
		{
			carTitle: "Aston Martin",
			carCategory: "Sport",
			fav: false,
			salePrice: false,
		},
		{
			carTitle: "Koenigsegg",
			carCategory: "Sport",
			fav: true,
			salePrice: true,
		},
		{
			carTitle: "Aston Martin",
			carCategory: "Sport",
			fav: false,
			salePrice: false,
		},
	];

	return (
		<>
			<header className="my-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mb-4 mb-lg-0">
							<HeaderCard data={headerData[0]} />
						</div>
						<div className="col-lg-6">
							<HeaderCard data={headerData[1]} />
						</div>
					</div>
				</div>
			</header>

			<section className="mb-5">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<SearchCard heading={"Pick-Up"} bgDot={"bg-primary-morent shadow-primary-morent"} />
						</div>
						<div className="col-lg-2 text-center">
							<button type="button" className="btn btn-primary-morent shadow-primary-morent px-4 py-3 fs-28">
								<TbArrowsSort />
							</button>
						</div>
						<div className="col-lg-5">
							<SearchCard heading={"Drop-Off"} bgDot={"bg-primary-morent-100 shadow-primary-morent-100"} />
						</div>
					</div>
				</div>
			</section>

			<section className="mb-5">
				<div className="container">
					<div className="d-flex align-items-center justify-content-between px-4 mb-5">
						<div className="fs-16 fw-500 text-secondary-100">Popular Car</div>
						<div className="">
							<a href="#" className="fs-16 fw-600 text-primary-100">
								View All
							</a>
						</div>
					</div>

					<div className="row mb-5">
						{productData.map((item, i) => {
							return (
								<React.Fragment key={i}>
									<div className="col-lg-3 mb-4">
										<ProductCard data={item} />
									</div>
								</React.Fragment>
							);
						})}
					</div>

					<div className="d-flex align-items-center justify-content-between px-4 mb-5">
						<div className="fs-16 fw-500 text-secondary-100">Recommendation Car</div>
						<div className="">
							{/* <a href="#" className="fs-16 fw-600 text-primary-100">
								View All
							</a> */}
						</div>
					</div>

					<div className="row mb-5">
						{recomendCar.map((item, i) => {
							return (
								<React.Fragment key={i}>
									<div className="col-lg-3 mb-4">
										<ProductCard data={item} />
									</div>
								</React.Fragment>
							);
						})}
					</div>

					<div className="d-flex align-items-center justify-content-center px-4 mb-5">
						<div className="mx-auto">
							<button type="button" className="btn btn-primary-morent">
								Show more car
							</button>
						</div>
						<div className="fs-16 fw-500 text-secondary-100">120 Car</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
