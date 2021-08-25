import { useState } from 'react';

import useFetch from '../../hooks/useGifs';

import Container from 'react-bootstrap/Container';

import SearchForm from '../../components/SearchForm';
import Suggestions from '../../components/Suggestions';
import Result from '../../components/Result';
import { useLocation } from 'react-router-dom';

const Home = () => {

    const location = useLocation();


    const [inputValue, setInputValue] = useState<string>('');
    const [termSearch, setTermSearch] = useState<string>('animaciones');

    const { query, setPage } = useFetch(termSearch);
    const { data, isLoading } = query;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setTermSearch(inputValue);
    }

    return (
       <Container style={{ minHeight: '100vh'}}>
           <SearchForm 
            handleSubmit={handleSubmit}
            setInputValue={setInputValue}
            inputValue={inputValue}
            />
           <Suggestions 
            term={ termSearch }
            handleInputSearch={ setTermSearch }
            handleInputValue={ setInputValue } />
           <Result 
            data={ data }
            setPage={ setPage }
            isLoading={ isLoading }
            pathname={ location.pathname }/>
       </Container>
    )
}

export default Home;
