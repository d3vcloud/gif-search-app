import React, { useEffect, useRef, useCallback, Suspense, useState, useReducer } from 'react';

import Masonry from 'react-masonry-css';
import debounce from 'just-debounce-it';

import useNearScreen from '../../hooks/useNearScreen';

import Loading from '../Loading/Loading';
import Loader from '../Loader/Loader';

import Gif from '../Gif';

import FlashMessage from '../FlashMessage';
import favoriteReducer from '../../reducers/favoriteReducer';
import { GifData } from '../../types/typeApp';

import './Result.css';

type Props = {
    data: any;
    setPage:(page: any) => void;
    isLoading: boolean;
    status: 'FAVORITE' | 'HOME';
}

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const init = () => {

    const favorites = localStorage.getItem('favorites');

    return favorites !== null ? JSON.parse(favorites): [];
}

const Result: React.FC<Props> = ({ data, setPage, isLoading, status }) => {

    const [isVisible, setIsVisible] = useState(false); //Reutilizar
    
    //Reutilizar
    const externalRef = useRef<HTMLDivElement>(null);
    const isNearScreen = useNearScreen('100px',externalRef, false);

    //Reutilizar
    const [favorites, dispatch] = useReducer(favoriteReducer,[],init);

    //Reutilizar
    const debounceHandleNextPage = 
        useCallback(debounce(() => setPage((page: number) => page + 1), 1000),[setPage]);

    //Reutilizar    
    useEffect(() => {
        //Evitamos que se llame dos veces a la API
        if(isNearScreen) debounceHandleNextPage();
    },[isNearScreen,debounceHandleNextPage]);

    useEffect(() => {
        localStorage.setItem('favorites',JSON.stringify(favorites));
    },[favorites]);

    const actionFavorite = (gif: GifData) => {
        
        if(status === 'FAVORITE') {
            dispatch({
                payload: gif,
                type: 'REMOVE'
            });
        }else {
            dispatch({
                payload: gif,
                type: 'ADD'
            });
        }
        
    }

    if(isLoading) return <Loading />;

    return <>
                {isVisible && <FlashMessage message="Enlace copiado!"/>}
                <Masonry
                    style={{ minHeight: '100vh'}}
                    breakpointCols={ breakpointColumnsObj }
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'>
                    {
                        data.map((gif: any) => (
                            <Suspense key={gif.id} fallback={<Loader />}>
                                <Gif 
                                    gif={ gif }
                                    setIsVisible={ setIsVisible }
                                    actionFavorite={ actionFavorite }
                                />
                            </Suspense>
                        ))
                    }
                </Masonry>
                <div id='visor' ref={ externalRef }></div>
            </>
    
}

export default Result;
