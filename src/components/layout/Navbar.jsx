import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const headerNav = () => {
	return (
		<>
			<Navbar expand={"lg"} className="bg-body-tertiary mb-3">
				<Container fluid>
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
							<Form className="d-flex position-relative">
								<Form.Control type="search" placeholder="Search something here" className="me-2" aria-label="Search" />
							</Form>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link href="#action1">Home</Nav.Link>
								<Nav.Link href="#action2">Link</Nav.Link>
								<NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-lg`}>
									<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
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
