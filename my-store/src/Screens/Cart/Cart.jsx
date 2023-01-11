import React from 'react'
import { useSelector } from 'react-redux';
import StoreNavbar from '../../Components/Navbars/storeNavbar';
import { Row , Col , Container } from 'react-bootstrap';
import Cards from '../../Components/Cards';


const Cart = () => {
  const {cartItem} = useSelector((state)=>state.AddToCartReducer);
  return (
    <>
    <div className='Cart_Item'>
    <StoreNavbar />
    {cartItem.length === 0 ? (
    <h2 style={{color : "black" , textAlign : "center" , marginTop : "10px"}}>
      Cart is Empty 
      </h2>
    ):(
  <>
    <Container >
      <Row>
        {cartItem.map((product,id)=>{
          return( 
          <Col lg="12" key={id}>
            <Cards product={product} removeBtn={true}   /> 
          </Col>)
        })}
      </Row>
    </Container>
  </>
    )};
    
    </div>
    </>
  )
}

export default Cart;
