import { ActionReducer, GifData } from "../types/typeApp";

const favoriteReducer = (state: GifData[], action: ActionReducer) : GifData[]=> {

    switch(action.type){

        case 'ADD':
            //Buscamos si ya esta marcado como favorito
            const isMarked = state.find(gif => gif.id === action.payload.id);
            
            //Si no esta marcado, agregamos el objeto al arreglo
            if(!isMarked) return [...state, action.payload];

            //Caso contrario, retornanos la lista inicial
            return state;
        
        case 'REMOVE':
            return state;
            
        default:
            return state;
    }
}

export default favoriteReducer;