import React from "react";

const Search = ({ heading, bgDot }) => {
	return (
		<>
			<div className="search-card shadow">
				<div className="d-flex align-items-center mb-3 gap-2">
					<div className={`pick-dot ${bgDot}`}></div>
					<div className="heading fs-16 fw-600">{heading}</div>
				</div>

				<div className="row mx-0">
					<div className="col-4 px-0">
						<div className="input-search-container pe-3">
							<label htmlFor="location">Locations</label>
							<select name="" id="">
								<option value="">Select your city</option>
								<option value="new york">New York</option>
							</select>
						</div>
					</div>
					<div className="col-4 px-0">
						<div className="input-search-container px-3">
							<label htmlFor="location">Date</label>
							<select name="" id="">
								<option value="">Select your date</option>
								<option value="1">1</option>
							</select>
						</div>
					</div>
					<div className="col-4 px-0">
						<div className="input-search-container border-0 ps-3">
							<label htmlFor="location">Time</label>
							<select name="" id="">
								<option value="">Select your time</option>
								<option value="11:41">11:41</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Search;
