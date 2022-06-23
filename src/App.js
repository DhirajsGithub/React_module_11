import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './components/store/ui-slice';
import React from 'react'
import Notification from './components/UI/Notification'
import { sendCartData, fetchCartData } from './components/store/cart-actions';

let isInitial = true;
function App() {
  const showCart = useSelector((state)=>state.ui.cartIsVisible)
  const cart = useSelector((state)=> state.cart);
  const notification = useSelector((state) => state.ui.notification)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
        // dispatch(
    //       uiActions.showNotification({
    //         status : 'pending',
    //         title : 'sending...',
    //         message : 'Sending Cart data...',
    //       })
    //     )

    // const sendCartData = async () =>{
    //  const response = await fetch('https://react-http-6b42f-default-rtdb.firebaseio.com/cart.json', {
    //   // why PUT to override the cart every time cart items changes
    //   // method: 'POST', 
    //   method: 'PUT',      
    //   body : JSON.stringify(cart),
    // }) 

    // if(!response.ok){
    //   throw new Error ('Sending Cart Data Failed');
    // }
    
    // const responseData = await response.json();
    // dispatch(
    //   uiActions.showNotification({
    //     status : 'success',
    //     title : 'Success !',
    //     message : 'Send Cart data successfully ',
    //   })
    // )

    // }
    // // sendCartData().catch((error) => {  where the function get called hence if (isInitial) is truthy the function sedCartDat won' be executed
    // if (isInitial){
    //   isInitial = false;
    //   return;
    // }
    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'error',
    //       title: 'Error!',
    //       message: 'Sending cart data failed!',
    //     })
    //   )
    // });

    if(isInitial){
      isInitial = false;
      return;
    }
    if(cart.changed){
       // Redux toolkit, is that it's prepared for that. It does not just accept action objects with a type property. Instead it also does accept, action creators that return functions.
    dispatch(sendCartData(cart))
    }
   
    
  }, [cart, dispatch])
  
  return (
    <React.Fragment>
        {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    <Layout>
     { showCart && <Cart />}
      <Products />
    </Layout>
    </React.Fragment>
  );
}

export default App;
