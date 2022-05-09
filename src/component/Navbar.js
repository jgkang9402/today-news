import React from "react";
import { Container, Nav } from "react-bootstrap";

const Navbar = () => {
  const menus = [
    "Sport",
    "Tech",
    "World",
    "Finance",
    "Politics",
    "Business",
    "Economics",
    "Entertainment",
    "Beauty",
    "Travel",
    "Food",
    "Science",
    "others"
  ];
  return (
    <Container>
      <Nav defaultActiveKey="/home" as="ul" className="navbar">
        {menus.map((menu) => (
          <Nav.Item as="li">
            <Nav.Link href="">{menu}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
};

export default Navbar;
