import { useState } from 'react';
import { Container, Dropdown, DropdownButton, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import Result from './Result/Result';

import './Styles.css';
import Suggestions from './Suggestions/Suggestions';

const Home = () => {

    const [category, setCategory] = useState<string>("gifs");
    const [inputValue, setInputValue] = useState<string>('');
    const [termSearch, setTermSearch] = useState<string>('animaciones');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setTermSearch(inputValue);
    }

    return (
       <Container>
           <Row>
                {/* Aqui agregaremos un logo animado */}
           </Row>
           <Form className="mt-5" onSubmit={ handleSubmit }>
                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-secondary"
                        title={category}
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#" onClick={() => setCategory("gifs")}>Gifs</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => setCategory("stickers")}>Stickers</Dropdown.Item>
                    </DropdownButton>
                    <FormControl 
                        type="text"
                        id="txtTerm"
                        name="txtTerm"
                        className="search-input"
                        placeholder="Busca un gif o sticker aqui" 
                        autoFocus
                        value={ inputValue }
                        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value) }
                        />
                </InputGroup>               
           </Form>
           <Suggestions 
            term={ termSearch }
            handleInputSearch={ setTermSearch }
            handleInputValue={ setInputValue } />
           <Result term={ termSearch } type='gifs'/>
           
       </Container>
    )
}

export default Home
