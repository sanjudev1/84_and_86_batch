
import { useSelector ,useDispatch} from 'react-redux'
import CustomNavbar from './customnavbar'
import { AudioSpinner } from './customspinner'
import { decrement, increment } from '../storeProducts/recipeslice'


function Cart(){
const {chinnamagariruchulu:{recipes}}=  useSelector((state)=>state)
const dispatch=useDispatch() 
console.log(recipes)
return(<>
  <CustomNavbar/>
  {recipes.length>0?
  recipes.map(e=><div style={{display:'flex',flex:'column',justifyContent:'center'}}>
    <button className='btn btn-danger' onClick={()=>dispatch(decrement(e))}>-</button>
    <img src={e.image} style={{width:'100px'}}/>
    <h2>{e.count}</h2>
    <button className='btn btn-success' onClick={()=>dispatch(increment(e))}>+</button>
  </div>)
  :<AudioSpinner/>}
</>)
}
export default Cart 