import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getData';
import { QueryFetch } from '../types/typeApp';

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

    const [page, setPage] = useState(0);
    const [loadingNextPage, setLoadingNextPage] = useState(false);

    useEffect(() => {

        //Reiniciamos la cantidad a 0 cuando cambia el termino de busqueda o categoria
        setPage(0);

        // setQuery({
        //     data: [],
        //     isLoading: true,
        //     isError: false,
        // });

        getGifs(type, searchTerm)
            .then(response => {

                setQuery({
                    data: response,
                    isLoading: false,
                    isError: false,
                })
                

            })
            .catch(err => {

                setQuery({
                    data: [],
                    isLoading: false,
                    isError: true
                });

                
            })

    }, [searchTerm, type]);

    useEffect(() => {

        if(page === 0) return;

        setLoadingNextPage(true);

        getGifs(type, searchTerm,page)
            .then(nextGifs => {

                setLoadingNextPage(false);
                //prevQuery.data.concat(nextGifs)
                
                setQuery(prevQuery => ({
                    ...prevQuery,
                    data: [...prevQuery.data, ...nextGifs]
                }));
                
            })

    }, [page, searchTerm, type]);

    return {
        query,
        setPage,
        loadingNextPage
    };
}

export default useFetch;