import './FlashMessage.css';

type Props = {
    message: string;
}

const FlashMessage = ({ message }: Props) => {
    
    return (
        <div className='flash-message'>
            <div className='content-message'>
                <div className='message'>{ message }</div>
            </div>
        </div>
    )
}

export default FlashMessage;
