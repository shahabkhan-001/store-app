import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add , remove } from '../../Store/CartSlice';


const Cards = ({product,removeBtn ,p}) => {
   const dispatch = useDispatch();


   const addToCart = () => {
    dispatch(add(product))
    };
    const removeToCart =() => {
      dispatch(remove(product))
    }



   return (
    <>

    
    <Card  className='my-3' style={{height : "80vh"}} >
      <Card.Img variant="top" style={{height : "50vh"}} src={product.image} />
      <Card.Body>
        <Card.Title style={{fontSize : "18px"}}>{product.title}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
      </Card.Body>
      {
        removeBtn ? (
      <Button onClick={removeToCart} className='Btn'>Remove Cart</Button>
      ) : (
        <Button onClick={addToCart} className='Btn'>Add to Cart</Button>
        )
      }
    </Card>



    </>
        
        );

      }

      export default Cards;
    
