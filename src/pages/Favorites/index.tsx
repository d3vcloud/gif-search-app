import { useContext } from 'react';

import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { FavoriteContext } from '../../components/Contexts/FavoriteContext';
import Result from '../../components/Result';



const Favorites = () => {

    const location = useLocation();

    const { favorites } = useContext(FavoriteContext);

    return (
        <Container style={{ minHeight: '100vh'}}>
            {
                favorites &&   
                    <Result 
                        data={ favorites }
                        setPage={ () => {} }
                        pathname={ location.pathname }/>       
            }          
        </Container>
    )
}

export default Favorites;
