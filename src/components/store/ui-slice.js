import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice ({
    name : 'ui',
    initialState : { cartIsVisible : false, notification : null},
    reducers :{
        toggle (state){
            state.cartIsVisible = !state.cartIsVisible;
    }, 
    showNotification (state, action){
        state.notification = {
            status : action.payload.status,
            title : action.payload.title, 
            message : action.payload.message,
        }
    }
}
})

// // creating a action function (Thunk)
// export const sendCartData = (cart)=>{
//     return async (dispatch)=>{
//         dispatch(
//             uiActions.showNotification({
//               status : 'pending',
//               title : 'sending...',
//               message : 'Sending Cart data...',
//             })
//           )
//           const sendRequest = async () =>{
//             const response = await fetch('https://react-http-6b42f-default-rtdb.firebaseio.com/cart.json', {
//              // why PUT to override the cart every time cart items changes
//              // method: 'POST', 
//              method: 'PUT',      
//              body : JSON.stringify(cart),
//            }) 
       
//            if(!response.ok){
//              throw new Error ('Sending Cart Data Failed');
//            }          
//         }

//         try {
//             // this await is from return async
//             await sendRequest();
//             dispatch(
//                 uiActions.showNotification({
//                   status : 'success',
//                   title : 'Success !',
//                   message : 'Send Cart data successfully ',
//                 })
//               )
//         } catch (error) {
//             dispatch(
//                 uiActions.showNotification({
//                   status: 'error',
//                   title: 'Error!',
//                   message: 'Sending cart data failed!',
//                 })
//               )
//         }
        
//     }
// }

export const uiActions = uiSlice.actions;
export default uiSlice;