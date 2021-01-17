import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const TopNavigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Pokedex</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/mypokemon">My Pokemon</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default TopNavigation;
