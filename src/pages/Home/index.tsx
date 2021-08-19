import { useState } from 'react';

import { Container, Form, FormControl, InputGroup } from 'react-bootstrap'

import Suggestions from '../../components/Suggestions/Suggestions';
import Result from '../../components/Result/Result';

import './Home.css';

const Home = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const [termSearch, setTermSearch] = useState<string>('animaciones');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setTermSearch(inputValue);
    }

    return (
       <Container>
           <Form className="mt-5" onSubmit={ handleSubmit }>
                <InputGroup className="mb-3">
                <InputGroup.Text className='group-text'>Buscador</InputGroup.Text>
                    <FormControl 
                        type="text"
                        id="txtTerm"
                        name="txtTerm"
                        className="search-input"
                        placeholder="Busca un gif pulsando ENTER" 
                        autoFocus
                        autoComplete="off"
                        value={ inputValue }
                        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value) }
                        />
                </InputGroup>               
           </Form>
           <Suggestions 
            term={ termSearch }
            handleInputSearch={ setTermSearch }
            handleInputValue={ setInputValue } />
           <Result term={ termSearch }/>
           
       </Container>
    )
}

export default Home;
