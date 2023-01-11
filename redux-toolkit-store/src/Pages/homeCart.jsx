import React, { useEffect } from 'react'
import StoreNavbar from '../Components/Navbars/storeNavbar';
import Cards from '../Components/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Store/ProductSLice';
import { Container , Row , Col } from 'react-bootstrap';

const HomeCart = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProduct());
    // eslint-disable-next-line
  },[])

  const {data , status } = useSelector((state) => state.products)
    console.log(data  , status , "data ");

    // if(status === "loading") {
    //   return 
    // }

  return (
    <>
      <StoreNavbar />
      <br/>
      {status ? (
        <h1>Loading....</h1>
      ) : (
      <Container>
        <Row>
        {data.map((product,id)=> {
        return (
          <Col lg="4" md="12"  key={id}>
            <Cards product={product} />
          </Col>
        )
      })
      }
        </Row>
      </Container>
      )

      }
      
      
      
    </>
  )
}

export default HomeCart;
