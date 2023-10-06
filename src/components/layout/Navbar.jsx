import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LuSearch } from "react-icons/lu";
import { PiSlidersHorizontalThin } from "react-icons/pi";
import { BsHeartFill } from "react-icons/bs";
import { GoBellFill } from "react-icons/go";
import { FaCog } from "react-icons/fa";
import { HiMiniUser } from "react-icons/hi2";

const headerNav = () => {
	return (
		<>
			<Navbar expand={"lg"} className="headNav">
				<Container>
					<Navbar.Brand href="#">Morent</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-lg`}
						aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
						placement="end">
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>Morent</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<div className="search">
								<Form.Control type="search" placeholder="Search something here" />
								<div className="search-icon">
									<LuSearch />
								</div>
								<div className="slider-icon">
									<PiSlidersHorizontalThin />
								</div>
							</div>
							<Nav className="justify-content-end align-items-center flex-grow-1 pe-3 gap-3">
								<Nav.Link href="#action1">
									<BsHeartFill />
								</Nav.Link>
								<Nav.Link href="#action2" className="bell-notify">
									<GoBellFill />
								</Nav.Link>
								<Nav.Link href="#action3">
									<FaCog />
								</Nav.Link>
								<NavDropdown title={<HiMiniUser />} id={`offcanvasNavbarDropdown-expand-lg`}>
									<NavDropdown.Item href="#action4">Profile</NavDropdown.Item>
									<NavDropdown.Item href="#action5">Settings</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action6">Logout</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};

export default headerNav;
