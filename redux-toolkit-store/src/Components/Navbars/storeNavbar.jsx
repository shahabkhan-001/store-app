import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from 'react-redux'


const StoreNavbar = () => {
  const cart = useSelector((state)=>state.cart);
  console.log(cart)
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">FakeStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3 box2">
              <Link to="/" className="Link">Home</Link>
              <Link to="/cartItem" className="Link"><AiOutlineShoppingCart  size={40}/></Link>
              {/* <Link className="Cart_length">Cart Item : 0</Link>               */}
          </Nav>
          <div className="Cart_length">
            <p>
           {cart.length}
            </p>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default StoreNavbar;


