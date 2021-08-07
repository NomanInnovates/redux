import {db} from '../../configs/firebase';
// import {useState} from 'react'

export const productAction = (data) => async(dispatch,prevState) =>{
    // const [pros, setPros] = useState([]);
    let fetchProducts = []
    try{
    let res = await db.collection('products').get();
    res.forEach((doc)=>{
        fetchProducts.push({ ...doc.data(),id:doc.id})
    })
    console.log("data in products action",fetchProducts)
    // setPros(fetchProducts)
    dispatch({
        type:"Fetched Products",
        payload:fetchProducts
    })
}
  
    catch (error) {
            console.log("error",error)
            dispatch({
                type:'Error Fetched Products',
                payload:error
            })
        }

}
