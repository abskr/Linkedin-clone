import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import linkedInSmLogo from "../../../assets/LinkedinSVG's/svgexport-11.svg";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { CgMenuGridO } from "react-icons/cg";
import { RiSlideshow3Fill } from "react-icons/ri";

const navbarStyle = {
  backgroundColor: "white",
  borderBottom: "1px solid #e8e8e8",
};
const searchInput = {
  padding: "17px",
  paddingLeft: "55px",
  width: "280px",
  border: "1px solid #f5f5f5",
  fontSize: "1rem",
  lineHeight: "1.5",
  backgroundColor: "#f2f5fa",
  outline: "0",
};

const rightNav = {
  borderLeft: "1px solid #e8e8e8",
};
export default function TopNavbar({ links, title, image }) {
  return (
    <div>
      <Navbar style={navbarStyle}>
        <Container>
          <Navbar.Brand className="mr-2" href="/">
            <Link to="/">
              <img height={34} src={linkedInSmLogo} />
            </Link>
          </Navbar.Brand>
          <Form inline>
            <div style={{ position: "relative" }}>
              <FormControl
                style={searchInput}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <BiSearchAlt2
                style={{
                  position: "absolute",
                  left: "25",
                  top: "10",
                  fontSize: "1.2rem",
                }}
              />
            </div>
          </Form>

          <Nav className="ml-auto">
            <div className="d-flex">
              <Nav.Item className="mr-3">
                <Link
                  to="/"
                  className="text-dark d-flex flex-column justify-content-center align-items-center navLink"
                  style={{
                    textDecoration: "none",
                    fontSize: "12px",
                  }}
                >
                  <HiHome style={{ fontSize: "24px" }} />
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Link
                  className="text-dark d-flex flex-column justify-content-center align-items-center"
                  style={{ textDecoration: "none", fontSize: "12px" }}
                >
                  <BsPeopleFill style={{ fontSize: "24px" }} />
                  My Network
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Link
                  className="text-dark d-flex flex-column justify-content-center align-items-center"
                  style={{ textDecoration: "none", fontSize: "12px" }}
                >
                  <BsBriefcaseFill style={{ fontSize: "24px" }} />
                  Jobs
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Link
                  className="text-dark d-flex flex-column justify-content-center align-items-center"
                  style={{ textDecoration: "none", fontSize: "12px" }}
                >
                  <RiMessage2Fill style={{ fontSize: "24px" }} />
                  Messaging
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Link
                  className="text-dark d-flex flex-column justify-content-center align-items-center"
                  style={{ textDecoration: "none", fontSize: "12px" }}
                >
                  <GoBell style={{ fontSize: "24px" }} />
                  Notifications
                </Link>
              </Nav.Item>
              <Nav.Item className="ml-2 mr-4">
                <Link
                  to="/profile"
                  className="text-dark d-flex flex-column justify-content-center align-items-center"
                  style={{ textDecoration: "none", fontSize: "12px" }}
                >
                  <img src={image} style={{ height: "24px" }} />
                  Profile
                </Link>
              </Nav.Item>
            </div>

            <div style={rightNav} className="d-flex">
              <Nav.Item className="ml-4 mr-2">
                <Link
                  className="text-dark d-flex flex-column justify-content-center align-items-center"
                  style={{ textDecoration: "none", fontSize: "12px" }}
                >
                  <CgMenuGridO style={{ fontSize: "24px" }} />
                  Work
                </Link>
              </Nav.Item>
              <Nav.Item className="ml-4 mr-2">
                <Link
                  className="text-dark d-flex flex-column justify-content-center align-items-center"
                  style={{ textDecoration: "none", fontSize: "12px" }}
                >
                  <RiSlideshow3Fill style={{ fontSize: "24px" }} />
                  Learning
                </Link>
              </Nav.Item>
            </div>
            {/* {links.map((link, i) => {
              return (
                <Nav.Item className="mr-3" key={i}>
                  <Link
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                    to={link.toLowerCase() === "home" ? "/" : `/${link}`}
                  >
                    {link}
                  </Link>
                </Nav.Item>
              );
            })} */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
