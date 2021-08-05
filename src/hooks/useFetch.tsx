import { useEffect } from 'react';
import { useState } from 'react';
import { getSuggestions, getGifs} from '../helpers/getData';
import { QueryFetch } from '../types/typeApp';

/**
 * 
 * @param searchTerm - representa el dato ingresado por el usuario
 * @param type - representa el tipo de busqueda a realizar. Puede ser stickers, sugerencias, gifs
 * @returns 
 */
const useFetch = (searchTerm: string, type:string) => {

    //TODO: Definir si es necesario mejorar logica para usar mismo hook
    //Definir un estado, que será un objeto
    const [query, setQuery] = useState<QueryFetch>({
        data: [],
        isLoading: true,
        isError: false
    });
    
    useEffect(() => {

            //Resolve promise

            if(type === 'suggestions'){

                getSuggestions(searchTerm)
                    .then(response => {
                        
                        const data = response.splice(0,6);
    
                        setQuery({
                            data,
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
            }else {
                getGifs(type,searchTerm)
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
            }

    },[ searchTerm, type ]);

    return query;
}

export default useFetch;