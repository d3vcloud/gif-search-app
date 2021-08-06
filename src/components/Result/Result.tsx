import { useEffect, useRef } from 'react';

import debounce from "just-debounce-it";

// import { Button } from 'react-bootstrap';
import Masonry from 'react-masonry-css';

import useFetch from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen';
import Gif from '../Gif/Gif';

import './Result.css';
import { useCallback } from 'react';

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
    const isNearScreen = useNearScreen('100px',isLoading ? null : externalRef, false);
    console.log(isNearScreen);

    const handleNextPage = () => setPage(page => page + 1);

    const debounceHandleNextPage = 
        useCallback(debounce(() => setPage(page => page + 1), 1000),[]);

    useEffect(() => {
        if(isNearScreen) debounceHandleNextPage();
    },[isNearScreen,debounceHandleNextPage])

    return (
        <>
            <Masonry
                breakpointCols={ breakpointColumnsObj }
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    data.map(gif => (
                        <Gif    
                            key={gif.id}
                            {...gif}
                        />
                    ))
                }
            </Masonry>
            <div id='visor' ref={ externalRef }></div>
            {/* <div className="d-grid gap-2">
                <Button variant="primary" onClick={() => setPage(page => page + 1)}>Go to Next Page</Button>
            </div> */}
        </>
    )
}

export default Result
