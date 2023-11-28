import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { UserContext, CartContext } from "../App";

const Header = () => {
  const { countProduct } = useContext(CartContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="fixed-top"
      >
        <Container>
          <Navbar.Brand className="me-5">
            <Link
              className="link-light text-decoration-none d-flex align-items-center"
              to="/"
            >
              <FiShoppingBag className="me-1" />
              OnlineShop
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Link
                className="me-2 link-light text-decoration-none"
                to="/products"
              >
                Products
              </Link>
              <Link
                className="me-2 link-light text-decoration-none"
                to="/aboutUs"
              >
                AboutUs
              </Link>

              <Link
                className="me-2 link-light text-decoration-none"
                to="/contactUs"
              >
                Contact Us
              </Link>

              <Link className="me-2 link-light text-decoration-none" to="/cart">
                <BsCart4 />({countProduct})
              </Link>
            </Nav>
            <Nav>
              {Object.keys(user).length !== 0 ? (
                <>
                  <div className="me-3 link-light text-decoration-none">
                    {user.email}
                  </div>
                  <div
                    className="me-3 link-light text-decoration-none"
                    onClick={() => setUser({})}
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <Link
                    className="me-3 link-light text-decoration-none"
                    to="/Register"
                  >
                    Register
                  </Link>
                  <Link
                    className="me-3 link-light text-decoration-none"
                    to="/login"
                  >
                    Login
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
