import { useEffect, useReducer, createContext } from 'react';

import { Favorite } from "../../types/typeApp";

import favoriteReducer from '../../reducers/favoriteReducer';

const initialState = {
    favorites: [],
    dispatch: () => {}
};

export const FavoriteContext = createContext<Favorite>(initialState);

type Props = {
    children: JSX.Element
}

const init = () => {

    const favorites = localStorage.getItem('favorites');

    return favorites !== null ? JSON.parse(favorites): [];
}

export const FavoriteProvider = ({ children }: Props) => {

    const [favorites, dispatch] = useReducer(favoriteReducer,[],init);
    
    useEffect(() => {
        localStorage.setItem('favorites',JSON.stringify(favorites));
    },[favorites]);

    return (
        <FavoriteContext.Provider value={{ favorites, dispatch }}>
            { children }
        </FavoriteContext.Provider>
    )
}