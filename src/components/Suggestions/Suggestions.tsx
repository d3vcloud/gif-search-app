// import { useEffect, useState } from "react"
import React from "react";
import { Badge } from "react-bootstrap"
import useSuggestions from "../../hooks/useSuggestions";

import './Suggestions.css';

type Props = {
    term: string
}

const Suggestions = ({ term }: Props) => {
    
    const { data: suggestions } = useSuggestions(term);
    
    console.log('Render <Suggestions />');
    
    return (
        <div className="container-suggestions">
            {
                suggestions.map(suggestion => (
                    <Badge 
                        bg="secondary"
                        key={ suggestion.name }>
                        { suggestion.name }
                    </Badge>
                ))
            }
        </div>
    )
}

export default React.memo(Suggestions);
