import React, { useState } from "react";
import "./style.css";
import { HeaderCard, ProductCard, ProductResponsive, SearchCard } from "../../components";
import { TbArrowsSort } from "react-icons/tb";
import Slider from "react-slick";

const Home = () => {
	const [recomendCar, setRecomendCar] = useState([
		{
			carTitle: "All New Rush",
			carCategory: "SUV",
			fav: true,
			salePrice: true,
			recomend: true,
			img: "/assets/rush.png",
		},
		{
			carTitle: "CR  - V",
			carCategory: "SUV",
			fav: false,
			salePrice: false,
			recomend: true,
			img: "/assets/cr-v.png",
		},
		{
			carTitle: "All New Terios",
			carCategory: "SUV",
			fav: true,
			salePrice: true,
			recomend: true,
			img: "/assets/terios.png",
		},
		{
			carTitle: "CR  - V",
			carCategory: "SUV",
			fav: false,
			salePrice: false,
			recomend: true,
			img: "/assets/crv-black.png",
		},
		{
			carTitle: "MG ZX Exclusice",
			carCategory: "Hatchback",
			fav: true,
			salePrice: true,
			recomend: true,
			img: "/assets/mg-zx.png",
		},
		{
			carTitle: "New MG ZS",
			carCategory: "SUV",
			fav: false,
			salePrice: false,
			recomend: true,
			img: "/assets/mg-zs.png",
		},
		{
			carTitle: "MG ZX Excite",
			carCategory: "Hatchback",
			fav: true,
			salePrice: true,
			recomend: true,
			img: "/assets/mg-zx.png",
		},
		{
			carTitle: "New MG ZS",
			carCategory: "SUV",
			fav: false,
			salePrice: false,
			recomend: true,
			img: "/assets/mg-zs.png",
		},
	]);

	const [isLoading, setIsLoading] = useState(false);

	const handleShowMore = () => {
		setIsLoading(true);
		setTimeout(() => {
			setRecomendCar([
				...recomendCar,

				{
					carTitle: "All New Rush",
					carCategory: "SUV",
					fav: true,
					salePrice: true,
					recomend: true,
					img: "/assets/rush.png",
				},
				{
					carTitle: "CR  - V",
					carCategory: "SUV",
					fav: false,
					salePrice: false,
					recomend: true,
					img: "/assets/cr-v.png",
				},
				{
					carTitle: "All New Terios",
					carCategory: "SUV",
					fav: true,
					salePrice: true,
					recomend: true,
					img: "/assets/terios.png",
				},
				{
					carTitle: "CR  - V",
					carCategory: "SUV",
					fav: false,
					salePrice: false,
					recomend: true,
					img: "/assets/crv-black.png",
				},
			]);

			setIsLoading(false);
		}, 2000);
	};

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1.3,
					slidesToScroll: 1,
					dots: false,
				},
			},
		],
	};

	const headerData = [
		{
			heading: `The Best Platform for Car Rental`,
			para: `Ease of doing a car rental safely and
			reliably. Of course at a low price.`,
			backgroundColor: "#54a6ff",
			background: "/assets/ad-bg-1.png",
			btnLabel: "Rental Car",
			btnClass: "btn-primary-morent",
		},
		{
			heading: `Easy way to rent a car at a low price`,
			para: `Providing cheap car rental services
			and safe and comfortable facilities.`,
			backgroundColor: "#3563e9",
			background: "/assets/ad-bg-2.png",
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
			img: "/assets/ad-1.png",
		},
		{
			carTitle: "Nissan GT - R",
			carCategory: "Sport",
			fav: false,
			salePrice: false,
			img: "/assets/ad-2.png",
		},
		{
			carTitle: "Rolls - Royce",
			carCategory: "Sedan",
			fav: true,
			salePrice: true,
			img: "/assets/rolls.png",
		},
		{
			carTitle: "Nissan GT - R",
			carCategory: "Sport",
			fav: false,
			salePrice: false,
			img: "/assets/ad-2.png",
		},
	];

	return (
		<>
			<header className="my-lg-5 my-4 px-2 px-lg-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mb-4 mb-lg-0">
							<HeaderCard data={headerData[0]} />
						</div>
						<div className="col-lg-6 d-none d-lg-block">
							<HeaderCard data={headerData[1]} />
						</div>
					</div>
				</div>
			</header>

			<section className="mb-5 px-2 px-lg-0">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<SearchCard heading={"Pick-Up"} bgDot={"bg-primary-morent shadow-primary-morent"} />
						</div>
						<div className="col-lg-2 text-center">
							<button type="button" className="btn btn-primary-morent shadow-primary-morent swap-btn fs-28">
								<TbArrowsSort />
							</button>
						</div>
						<div className="col-lg-5">
							<SearchCard heading={"Drop-Off"} bgDot={"bg-primary-morent-100 shadow-primary-morent-100"} />
						</div>
					</div>
				</div>
			</section>

			<section className="mb-5 px-2 px-lg-0">
				<div className="container">
					<div className="d-flex align-items-center justify-content-between px-lg-4 mb-5">
						<div className="fs-16 fw-600 text-secondary-100">Popular Car</div>
						<div className="">
							<a href="#" className="fs-16 fw-600 text-primary-100">
								View All
							</a>
						</div>
					</div>

					<div className="row mb-5 d-none d-lg-flex">
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

					<div className="d-block d-lg-none">
						<Slider {...settings}>
							{productData.map((item, i) => {
								return (
									<div key={i} className="w-100 px-2">
										<ProductCard data={item} />
									</div>
								);
							})}
						</Slider>
					</div>

					<div className="d-flex align-items-center justify-content-between px-lg-4 mb-5 mt-5 mt-lg-0">
						<div className="fs-16 fw-600 text-secondary-100">Recommendation Car</div>
						<div className="">
							{/* <a href="#" className="fs-16 fw-600 text-primary-100">
								View All
							</a> */}
						</div>
					</div>

					<div className="row mb-5 ">
						{recomendCar.map((item, i) => {
							return (
								<React.Fragment key={i}>
									<div className="col-lg-3 mb-4 d-none d-lg-block">
										<ProductCard data={item} />
									</div>
									<div className="col-lg-3 d-block d-lg-none mb-4">
										<ProductResponsive data={item} />
									</div>
								</React.Fragment>
							);
						})}
					</div>

					{isLoading && (
						<div className="mb-5 d-flex justify-content-center">
							<div className="spinner-border text-primary" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					)}

					<div className="d-flex align-items-center justify-content-center px-4 mb-5">
						<div className="mx-auto">
							<button
								type="button"
								disabled={isLoading}
								onClick={() => handleShowMore()}
								className="btn btn-primary-morent">
								Show more car
							</button>
						</div>
						<div className="fs-16 fw-600 text-secondary-100">{recomendCar?.length} Car</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
