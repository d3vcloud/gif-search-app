import React from 'react'
import useFetch from '../../hooks/useFetch'

type Props = {
    term: string,
    type: 'stickers'|'gifs'
}

const Result = ({ term, type }: Props) => {

    const {data, isLoading} = useFetch(term,type);

    console.log(data);
    return (
        <div>
            
        </div>
    )
}

export default Result
