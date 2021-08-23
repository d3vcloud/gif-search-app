import React, { useEffect, useRef, useCallback, Suspense, useState, useReducer } from 'react';

import Masonry from 'react-masonry-css';
import debounce from 'just-debounce-it';

import useFetch from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen';

import Loading from '../Loading/Loading';
import Loader from '../Loader/Loader';

import Gif from '../Gif';

import FlashMessage from '../FlashMessage';
import favoriteReducer from '../../reducers/favoriteReducer';
import { GifData } from '../../types/typeApp';

import './Result.css';

type Props = {
    term: string,
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

const Result: React.FC<Props> = ({ term }) => {

    const [isVisible, setIsVisible] = useState(false);
    
    const { query, setPage } = useFetch(term);
    const { data, isLoading } = query;
    const externalRef = useRef<HTMLDivElement>(null);
    const isNearScreen = useNearScreen('100px',externalRef, false);

    const [favorites, dispatch] = useReducer(favoriteReducer,[],init);
    
    const debounceHandleNextPage = 
        useCallback(debounce(() => setPage(page => page + 1), 1000),[setPage]);

    useEffect(() => {
        //Evitamos que se llame dos veces a la API
        if(isNearScreen) debounceHandleNextPage();
    },[isNearScreen,debounceHandleNextPage]);

    useEffect(() => {
        localStorage.setItem('favorites',JSON.stringify(favorites));
    },[favorites]);

    const addToFavorites = (gif: GifData) => {
        
        dispatch({
            payload: gif,
            type: 'ADD'
        });
    }

    // const removeToFavorites = (id: number) => {
        
    //     dispatch({
    //         payload: id,
    //         type: 'REMOVE'
    //     });
    // }

    if(isLoading) return <Loading />;

    return <>
                {isVisible && <FlashMessage message="Enlace copiado!"/>}
                <Masonry
                    style={{ minHeight: '100vh'}}
                    breakpointCols={ breakpointColumnsObj }
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'>
                    {
                        data.map(gif => (
                            <Suspense key={gif.id} fallback={<Loader />}>
                                <Gif 
                                    gif={gif}
                                    setIsVisible={setIsVisible}
                                    addToFavorites={addToFavorites}
                                />
                            </Suspense>
                        ))
                    }
                </Masonry>
                <div id='visor' ref={ externalRef }></div>
            </>
    
}

export default Result;
