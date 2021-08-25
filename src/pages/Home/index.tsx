import { useState } from 'react';

import Container from 'react-bootstrap/Container';

import SearchForm from '../../components/SearchForm';
import Suggestions from '../../components/Suggestions';
import Result from '../../components/Result';
import useFetch from '../../hooks/useGifs';



const Home = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const [termSearch, setTermSearch] = useState<string>('animaciones');

    const { query, setPage } = useFetch(termSearch);
    const { data, isLoading } = query;

    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setTermSearch(inputValue);
    }

    return (
       <Container>
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
            status='HOME'/>
       </Container>
    )
}

export default Home;
