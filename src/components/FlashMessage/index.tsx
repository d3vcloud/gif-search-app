import React from 'react';
import './FlashMessage.css';

type Props = {
    message: string;
}

const FlashMessage: React.FC<Props> = ({ message }) => {
    
    return (
        <div className='flash-message'>
            <div className='content-message'>
                <div className='message'>{ message }</div>
            </div>
        </div>
    )
}

export default FlashMessage;
