import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="sm" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav
          variant="tabs"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="link_1">MENU</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="Link_2">GALLERY</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="link_3">EXPLORE</Nav.Link>
          </Nav.Item>
          <NavDropdown title="DROPDOWN" id="collasible-nav-dropdown">
            <NavDropdown.Item href="xyz">Something</NavDropdown.Item>
            <NavDropdown.Item href="abc">Something else</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Form.Control type="text" placeholder="search" aria-label="Search"className="ml-sm-3"/>
          <Button variant="primary">Search</Button>
          </Form>
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <Button variant="outline-primary"className="ml-lg-5">LOG IN</Button>{' '}
          <Button variant="outline-success ">SIGN IN</Button>{' '}
      </Navbar>
    );
  }
}
export default Navigation;
