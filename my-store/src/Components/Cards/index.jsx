import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { AddtoCart, RemovefromCart } from '../../Store/Action/Product';
import { AddCounter , MinusCounter } from '../../Store/Action/Counter';
import { db } from '../../firebase';
import { collection , addDoc } from 'firebase/firestore';


const Cards = ({product , removeBtn}) => {
  const dispatch = useDispatch();
  const {globalCounter} = useSelector((state)=> state.addCounterReducer)
  const { price , image , title   } = product

   const addToCart = async () => {
    console.log(demo)
     dispatch(AddtoCart(product));
     await addDoc(collection( db , "Cart" ),{
      product
     })
    };

   const removeToCart = () => {
    dispatch(RemovefromCart(product))
   };

   const addCount = () => {
    dispatch(AddCounter())
   };

   const minusCount = () => {
    dispatch(MinusCounter())
   };
   return (
    <>
    { removeBtn ? (
    <>
    {/* <Card  className='my-3' style={{height : "80vh"}} >
      <Card.Img variant="top" style={{height : "50vh"}} src={product.image} />
      <Card.Body>
        <Card.Title style={{fontSize : "18px"}}>{product.title}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
      </Card.Body>
          <Button onClick={removeToCart} className='Btn'>Remove Cart</Button>
    </Card> */}


    <div className='Remove_Cart'>
      <div>
        <img src={image} style= {{width : "150px" , height : "20vh" , marginBottom : "10px"}} alt={product.category} />
        <div>
          <Button onClick={removeToCart} className='Btn'>Remove Cart</Button>
        </div>
      </div>
      <div>
        <p>
          {title}
        </p>
      </div>
      <div>
        <p>
          ${globalCounter >= 0 ? ( price * globalCounter) : (price) }  
        </p>
        <div>
        <button onClick={addCount} className='btn_Counter'>+</button>
        {globalCounter}
        <button onClick={minusCount} className='btn_Counter'>-</button>  
        </div>  
      </div> 
    </div>


    </>
          ) : (
    <>
    <Card  className='my-3' style={{height : "80vh"}} >
      <Card.Img variant="top" style={{height : "50vh"}} src={image} />
      <Card.Body>
        <Card.Title style={{fontSize : "18px"}}>{title}</Card.Title>
        <Card.Text>
          ${price}
        </Card.Text>
      </Card.Body>
            <Button onClick={addToCart} className='Btn'>Add to Cart</Button>
    </Card>    
      </>
          ) 
          }
    </>
        
        );

      }

      export default Cards;
    
