import { useEffect, useState } from "react";
import { getSuggestions } from "../helpers/getData";
import { QueryFetch } from "../types/typeApp";

const useSuggestions = (searchTerm: string) => {

    const [query, setQuery] = useState<QueryFetch>({
        data: [],
        isLoading: true,
        isError: false
    });

    useEffect(() => {

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

export default useSuggestions;