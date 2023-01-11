import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"

const StoreNavbar = () => {
  const {cartItem}= useSelector((state) => state.AddToCartReducer );
  console.log(cartItem)



const logOut = () => {
  localStorage.setItem("uid" , "")
  localStorage.setItem("email" , "")
}
  return (
    <>
    <Navbar className="store_navbar" expand="lg">
      <Container>
        <Navbar.Brand  className="text-white" href="#home">FakeStore</Navbar.Brand>
        <Navbar.Toggle  className="Navbar_Toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto gap-3 box2">
              <Link to="/store" className="Link">Home</Link>
              <Link to="/addtocart" className="Link"><AiOutlineShoppingCart  size={40}/></Link>
              <Link to="/" >
                <button 
                  onClick={logOut}
                  className="Log_out"
                  >
                   Log Out
                </button>
              </Link>
          </Nav>
          <div className="Cart_length">
            <p>
           {cartItem.length}
            </p>
          </div>
 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default StoreNavbar;


