import { useEffect, useRef, useCallback, Suspense } from 'react';

import debounce from "just-debounce-it";

import useFetch from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen';

import Masonry from 'react-masonry-css';

import Gif from '../Gif/Gif';

import './Result.css';
import Loading from '../Loading/Loading';


type Props = {
    term: string,
    type: 'stickers'|'gifs'
}

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const Result = ({ term, type }: Props) => {

    const { query, setPage, loadingNextPage } = useFetch(term,type);
    const { data, isLoading } = query;
    const externalRef = useRef<HTMLDivElement>(null);
    const isNearScreen = useNearScreen('200px',externalRef, false);
    
    // const handleNextPage = () => setPage(page => page + 1);
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
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    data.map(gif => (
                        <Suspense key={gif.id} fallback={<div>Cargando imagen...!</div>}>
                            <Gif {...gif}/>
                        </Suspense>
                    ))
                }
            </Masonry>
            <div id='visor' ref={ externalRef }></div>
            
            {/* <div className="d-grid gap-2">
                <Button variant="primary" onClick={() => setPage(page => page + 1)}>Go to Next Page</Button>
            </div> */}
        </>
    
}

export default Result
