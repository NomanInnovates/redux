import Students from './modules/students/Student';
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import {productAction } from './redux/action/productAction'
import {addStudent } from './redux/action/studentActions'
import {fetchFollowers } from './redux/action/gitHubAction'
function App() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.productReducer.products
    )
  console.log("app.js store in Reducers=>",products);

  let ctaHandler = () =>{
    let dataPassToStore = {
      agNo:"5232",
      createdAt:new Date()
    }
    dispatch(addStudent(dataPassToStore))
  }
  
  let ctaHandlerGithub = () =>{
    let dataPassToStore = 'naveed-rana'
    dispatch(fetchFollowers(dataPassToStore))
  }
  let ctaHandlerPro = () => {
    let dataPassToStor = {
      title:"pikapu"
    }
    dispatch(productAction(dataPassToStor))
  }
  return (
    <div className="App">
      <button onClick={ctaHandlerPro}>fetch Products Reducer</button>
      <button onClick={ctaHandlerGithub}>fetch followers Reducer</button>
      <button onClick={ctaHandler}>Update Reducer</button>
     <Students />
    </div>
  );
}

export default App;
