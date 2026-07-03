import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router';
import { increment } from '../storeProducts/recipeslice';
import { useDispatch } from 'react-redux'

function FoodCard({item}) {
   
     const dispatch = useDispatch()
  return (
    <Card style={{ width: '18rem',margin:'5px' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         {item.instructions[0].slice(0,20)}
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link ><NavLink to={`/recipe/${item.id}`}><button className='btn btn-warning'>View More</button></NavLink></Card.Link>
        <Card.Link ><button className='btn btn-success' onClick={()=>dispatch(increment(item))}>Add to cart</button></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default FoodCard;