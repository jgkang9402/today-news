import React from "react";
import { Container, Nav } from "react-bootstrap";

const Navbar = ({setMenu, menuList}) => {

  return (
    <Container>
      <Nav defaultActiveKey="/home" as="ul" className="navbar">
        {menuList.map((menu,i) => (
          <Nav.Item as="li" key={i}>
            <Nav.Link onClick={()=>setMenu(menu)}>{menu}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
};

export default Navbar;
