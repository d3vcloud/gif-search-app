import React from 'react';

import { Badge } from 'react-bootstrap'

import useSuggestions from '../../hooks/useSuggestions';

import './Suggestions.css';

type Props = {
    term: string,
    handleInputSearch: (status: string) => void,
    handleInputValue: (status: string) => void
}

const Suggestions = ({ term, handleInputSearch, handleInputValue }: Props) => {
    
    const { data: suggestions } = useSuggestions(term);

    const handleUpdate = (suggestion: string) => {
        handleInputSearch(suggestion);
        handleInputValue(suggestion);
    }
    
    return (
        <div className='container-suggestions'>
            {
                suggestions.map(suggestion => (
                    <Badge 
                        key={ suggestion.name }
                        onClick={() => handleUpdate(suggestion.name)}
                        >
                        { suggestion.name }
                    </Badge>
                ))
            }
        </div>
    )
}

export default React.memo(Suggestions);
