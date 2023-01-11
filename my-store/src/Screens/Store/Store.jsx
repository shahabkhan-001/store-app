import React, { useEffect }  from 'react'
import StoreNavbar from '../../Components/Navbars/storeNavbar';
import Cards from '../../Components/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../Store/Action/Product';
import { Row , Col , Container , Spinner  } from 'react-bootstrap';


const Store = () => {
  const dispatch = useDispatch();
  const {data , dataLoading} = useSelector((state ) => state.GetProductReducer);
  useEffect(()=>{
    dispatch(getProduct())
    // eslint-disable-next-line
  },[])
  return (
    <>
    <StoreNavbar />
    <br />
    {dataLoading ? (
    <div className='Spinner_Loading'> 
      <Spinner animation="border"   variant="primary" />
    </div>
    ):(
      <Container >
      <Row>
        {data.map((product,id)=>{
          return( 
            <Col lg="4" md="6" sm="12" key={id}>
            <Cards product={product}  /> 
          </Col>)
        })}
      </Row>
    </Container>

)}
    
    </>
  )
}

export default Store;
