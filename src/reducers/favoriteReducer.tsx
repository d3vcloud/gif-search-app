import { ActionReducer } from "../types/typeApp";

const favoriteReducer = (state: any, action: ActionReducer) => {

    switch(action.type){

        case 'ADD':
            return state;

        case 'REMOVE':
            return state;
            
        default:
            return state;
    }
}

export default favoriteReducer;