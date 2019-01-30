import { Login, coordinates } from '../constants/ActionTypes';

const initialState = {
    show : false,
    userName : " venky",
    coordinates: []
}

export default function(state = initialState , action){
    
    switch (action.type){
        case Login:
        return{
            ...state,
            data:action.payload
        }
        case coordinates:
        return{
            ...state,
            coordinates:action.payload
        }

        case "toggleDraw":
        return{
            ...state,
            show:action.payload
        }
        default:
        return state;
    }
    
}