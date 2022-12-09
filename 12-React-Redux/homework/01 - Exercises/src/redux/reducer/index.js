import {ADD_PRODUCT, DELETE_PRODUCT } from '../actions/types.js'

const initialState = {
  list: []
}


export default function rootReducer (state = initialState, action) {
    switch(action.type){
        case ADD_PRODUCT:
            return ({
                ...state,
                list: [...state.list, action.payload]
            });
        case DELETE_PRODUCT:
            return({
                ...state,
                list: [...state.list.filter((p) => p.id !== action.payload)]
            });
        default:
            return {...state}
    }
}
