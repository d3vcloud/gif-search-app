import { useEffect } from 'react';
import { useState } from 'react';
import { getGifs } from '../helpers/getData';
import { QueryFetch } from '../types/typeApp';

/**
 * 
 * @param searchTerm - representa el dato ingresado por el usuario
 * @param type - representa el tipo de busqueda a realizar. Puede ser stickers, sugerencias, gifs
 * @returns 
 */

const INITIAL_PAGE = 0;

/**
 * 
 * @param searchTerm - Representa palabra o frase a buscar
 * @param type - Representa el tipo de busqueda: stickers o gifs
 * @returns 
 */
const useFetch = (searchTerm: string, type: string) => {

    const [query, setQuery] = useState<QueryFetch>({
        data: [],
        isLoading: true,
        isError: false
    });

    const [page, setPage] = useState(INITIAL_PAGE);
    const [loadingNextPage, setLoadingNextPage] = useState(false);

    useEffect(() => {

        //Reiniciamos la cantidad a 0
        setPage(0);

        getGifs(type, searchTerm)
            .then(response => {

                setQuery({
                    data: response,
                    isLoading: false,
                    isError: false
                })

            })
            .catch(err => {
                setQuery({
                    data: [],
                    isLoading: false,
                    isError: true
                })
            })

    }, [searchTerm, type]);

    useEffect(() => {

        setLoadingNextPage(true);

        if(page === INITIAL_PAGE) return;

        getGifs(type, searchTerm,page)
            .then(nextGifs => {

                setLoadingNextPage(false);

                setQuery(prevQuery => {
                    return {
                        ...prevQuery,
                        data: prevQuery.data.concat(nextGifs)//[...prevQuery.data, nextGifs]
                    }
                })
                
            })

    }, [page, searchTerm, type]);

    return {
        query,
        setPage,
        loadingNextPage
    };
}

export default useFetch;