import React, { useEffect, useRef, useCallback, Suspense } from 'react';

import Masonry from 'react-masonry-css';
import debounce from 'just-debounce-it';

import useFetch from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen';

import Loading from '../Loading/Loading';
import Loader from '../Loader/Loader';

import Gif from '../Gif/Gif';

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

const Result: React.FC<Props> = ({ term }) => {

    const { query, setPage } = useFetch(term);
    const { data, isLoading } = query;
    const externalRef = useRef<HTMLDivElement>(null);
    const isNearScreen = useNearScreen('100px',externalRef, false);
    
    const debounceHandleNextPage = 
        useCallback(debounce(() => setPage(page => page + 1), 1000),[setPage]);

    useEffect(() => {
        //Evitamos que se llame dos veces a la API
        if(isNearScreen) debounceHandleNextPage();
    },[isNearScreen,debounceHandleNextPage]);

    if(isLoading) return <Loading />;

    return <>
                <Masonry
                    style={{ minHeight: '100vh'}}
                    breakpointCols={ breakpointColumnsObj }
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'>
                    {
                        data.map(gif => (
                            <Suspense key={gif.id} fallback={<Loader />}>
                                <Gif {...gif}/>
                            </Suspense>
                        ))
                    }
                </Masonry>
                <div id='visor' ref={ externalRef }></div>
            </>
    
}

export default Result;
