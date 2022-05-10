import React from "react";
import { Container, Nav } from "react-bootstrap";

const Navbar = ({setMenu, menuList}) => {
  // const menus = [
  //   "business",
  //   "world",
  //   "tech",
  //   "sport",
  //   "finance",
  //   "politics",
  //   "economics",
  //   "entertainment",
  //   "beauty",
  //   "travel",
  //   "food",
  //   "science",
  // ];
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
