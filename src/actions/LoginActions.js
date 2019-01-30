import { Login, coordinates } from '../constants/ActionTypes';

export const userName = (data) =>{
    return{
        type: Login,
        payload:data
    }
}

export const setCoordinates = (data) => {

    return{
      type: coordinates,
      payload:data    
    }

}

export const toggleDraw = (val) => {
    return{
        type: "toggleDraw",
        payload:val    
      }
}

// return dispatch => {
//     return new Promise((resolve, reject) => {
//         dispatch({
//             type: "toggleDraw",
//             payload:val    
//           });
//           resolve();
//     })
// }