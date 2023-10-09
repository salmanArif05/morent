import React from "react";
import { BsHeart, BsHeartFill, BsFillFuelPumpFill } from "react-icons/bs";
import { PiSteeringWheelFill } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";

const ProductCard = ({ data }) => {
	const { carTitle, carCategory, fav, salePrice, img, recomend } = data;
	return (
		<>
			<div className="product-card">
				<div className="d-flex align-items-center justify-content-between">
					<div className="d-flex flex-column">
						<div className="car-title fs-20 fw-600 text-capitalize">{carTitle}</div>
						<div className="car-category fs-14 fw-500 text-secondary-100 text-capitalize">{carCategory}</div>
					</div>
					{fav ? (
						<div className="pointer heart-fav-filled">
							<BsHeartFill />
						</div>
					) : (
						<div className="pointer text-secondary-100">
							<BsHeart />
						</div>
					)}
				</div>
				<div className="car-img">
					<img src={img} alt="" />
					{recomend && <div className="productOverlay"></div>}
				</div>

				<div className="d-flex gap-2 justify-content-between  align-items-center my-3 text-secondary-100">
					<div className="d-flex gap-1 align-items-center">
						<div className="icon">
							<BsFillFuelPumpFill />
						</div>
						<div className="fs-14 fw-400 text-secondary-100">90L</div>
					</div>
					<div className="d-flex gap-1 align-items-center">
						<div className="icon">
							<PiSteeringWheelFill />
						</div>
						<div className="fs-14 fw-400 text-secondary-100">Manual</div>
					</div>
					<div className="d-flex gap-1 align-items-center">
						<div className="icon">
							<HiUsers />
						</div>
						<div className="fs-14 fw-400 text-secondary-100">2 People</div>
					</div>
				</div>

				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex flex-column">
						<div className="fs-16">
							<strong>$99.00/</strong>
							<small className="text-secondary-100">day</small>
						</div>
						{salePrice && (
							<small className="text-secondary-100">
								<s>100</s>
							</small>
						)}
					</div>
					<div>
						<button type="button" className="btn btn-primary-morent">
							Rent Now
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
