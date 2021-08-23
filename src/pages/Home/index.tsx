import { useState } from 'react';

import Container from 'react-bootstrap/Container';

import SearchForm from '../../components/SearchForm';
import Suggestions from '../../components/Suggestions';
import Result from '../../components/Result';

// import './Home.css';

const Home = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const [termSearch, setTermSearch] = useState<string>('animaciones');

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
           <Result term={ termSearch }/>
       </Container>
    )
}

export default Home;
