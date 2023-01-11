import React from 'react'
import { useSelector } from 'react-redux'
import StoreNavbar from '../Navbars/storeNavbar'
import { Container , Row , Col } from 'react-bootstrap'
import Cards from '../Cards'

const CartItem = () => {
const cart = useSelector ((state)=>state.cart)
console.log(cart , "df")
return (
    <>
    <StoreNavbar/>
    <Container>
      <Row>
      {cart.map((product,id)=>{
        return (
          <Col  lg="4" md="12"  key={id}>
            <Cards product={product} removeBtn={true} />
          </Col>
        )
})}


      </Row>

    </Container>

    </>
  )
}

export default CartItem
