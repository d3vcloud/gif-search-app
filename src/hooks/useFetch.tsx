import { useEffect } from 'react';
import { useState } from 'react';
import getSuggestions from '../helpers/getSuggestions';
import { QueryFetch } from '../types/typeApp';

const useFetch = (searchTerm: string) => {

    //TODO: Definir si es necesario mejorar logica para usar mismo hook
    //Definir un estado, que será un objeto
    const [query, setQuery] = useState<QueryFetch>({
        data: [],
        isLoading: true,
        isError: false
    });
    
    useEffect(() => {

            //Resolve promise
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

    },[ searchTerm ]);

    return query;
}

export default useFetch;