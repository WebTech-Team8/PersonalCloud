import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"
import {Container} from "react-bootstrap";

export default function NavbarComponent(){
    return (
        <Navbar bg="light" expands="sm">
            <Container>
                <Navbar.Brand href="#home">Personal Cloud</Navbar.Brand>
                <Form>
                    <FormControl type="search" placeholder="Search"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ml-auto">
                    <Nav>
                        Profile
                    </Nav>
                </Nav>
            </Container>
        </Navbar>
    )
}