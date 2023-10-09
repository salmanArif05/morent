import React from "react";
import { CustomButton } from "..";
import "./style.css";
import { BsFillFuelPumpFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { PiSteeringWheelFill } from "react-icons/pi";
import { HiUsers } from "react-icons/hi2";

const ProductResponsive = ({ data }) => {
	const { carTitle, carCategory, fav, salePrice, img, recomend } = data;
	return (
		<>
			<div className="responsive-card">
				<div className="row mb-2">
					<div className="col-8">
						<div className="d-flex flex-column mb-3">
							<div className="fs-16 fw-600">{carTitle}</div>
							<div className="fs-12 fw-500">{carCategory}</div>
						</div>

						<div className="car-img mb-4">
							<img src={img} alt="" />
							<div className="carOverlay"></div>
						</div>
					</div>
					<div className="col-4">
						<div className="text-end">
							{fav ? (
								<div className="pointer heart-fav-filled">
									<BsHeartFill />
								</div>
							) : (
								<div className="pointer text-secondary-100">
									<BsHeart />
								</div>
							)}

							<div className="d-flex gap-2 flex-column ps-1 my-3 text-secondary-100">
								<div className="d-flex gap-1 align-items-center">
									<div className="icon">
										<BsFillFuelPumpFill />
									</div>
									<div className="fs-14 fw-500 text-secondary-100">90L</div>
								</div>
								<div className="d-flex gap-1 align-items-center">
									<div className="icon">
										<PiSteeringWheelFill />
									</div>
									<div className="fs-14 fw-500 text-secondary-100">Manual</div>
								</div>
								<div className="d-flex gap-1 align-items-center">
									<div className="icon">
										<HiUsers />
									</div>
									<div className="fs-14 fw-500 text-secondary-100">2 People</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="d-flex align-items-center justify-content-between">
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
						<CustomButton type={"button"} btnLabel="Rental Now" themeClass="btn btn-primary-morent fs-12 fw-600" />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductResponsive;
