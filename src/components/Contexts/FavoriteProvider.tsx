import React, { useEffect, useReducer } from 'react'
import favoriteReducer from '../../reducers/favoriteReducer';
import FavoriteContext from './FavoriteContext';

type Props = {
    children: JSX.Element | React.ReactNode
}

const init = () => {

    const favorites = localStorage.getItem('favorites');

    return favorites !== null ? JSON.parse(favorites): [];
}

const FavoriteProvider: React.FC<Props> = ({ children }) => {

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

export default FavoriteProvider;
