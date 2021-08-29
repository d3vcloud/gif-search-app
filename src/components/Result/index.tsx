import { useEffect, useRef, useCallback, Suspense, useState, useContext } from 'react';

import Masonry from 'react-masonry-css';
import debounce from 'just-debounce-it';

import { FavoriteContext } from '../Contexts/FavoriteContext';
import { GifData } from '../../types/typeApp';

import useNearScreen from '../../hooks/useNearScreen';

import FlashMessage from '../FlashMessage';
import Loading from '../Loading/Loading';
import LazyLoader from '../LazyLoader';
import Gif from '../Gif';

import './Result.css';

type Props = {
    data: any;
    setPage:(page: any) => void;
    isLoading ? : boolean;
    pathname: string;
}

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const Result = ({ data, setPage, isLoading, pathname }: Props) => {

    const [isVisible, setIsVisible] = useState(false);

    const { dispatch } = useContext(FavoriteContext);

    const externalRef = useRef<HTMLDivElement>(null);
    const isNearScreen = useNearScreen('100px',externalRef, false);

    const debounceHandleNextPage = 
        useCallback(debounce(() => setPage((page: number) => page + 1), 1000),[setPage]);


    useEffect(() => {
        //Evitamos que se llame dos veces a la API
        if(isNearScreen) debounceHandleNextPage();
    },[isNearScreen,debounceHandleNextPage]);

    const actionFavorite = useCallback((gif: GifData) => {

        if(pathname === '/') {
            dispatch({
                payload: {
                    ...gif,
                    isFavorite: true
                },
                type: 'ADD' 
            });
        }
        else {
            dispatch({
                payload: gif,
                type: 'REMOVE' 
            });
        }
    },[dispatch, pathname]);

    if(isLoading) return <Loading />;

    return  <>
                {isVisible && <FlashMessage message="Enlace copiado!"/>}
                <Masonry
                    breakpointCols={ breakpointColumnsObj }
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'>
                    {
                        data.map((gif: any) => (
                            <Suspense key={gif.id} fallback={<LazyLoader />}>
                                <Gif 
                                    gif={ gif }
                                    setIsVisible={ setIsVisible }
                                    actionFavorite={ actionFavorite}
                                />
                            </Suspense>
                        ))
                    }
                </Masonry>
                <div id='visor' ref={ externalRef }></div>
            </>
    
}

export default Result;
