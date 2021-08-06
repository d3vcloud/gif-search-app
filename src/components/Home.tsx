import React, { useState, useRef, useEffect } from 'react';
import { Container, Dropdown, DropdownButton, FormControl, InputGroup, Row } from 'react-bootstrap'
import Result from './Result/Result';
import useNearScreen from '../hooks/useNearScreen';

import './Styles.css';
import Suggestions from './Suggestions/Suggestions';

const Home = () => {

    const [category, setCategory] = useState<string>("gifs");
    const [inputSearch, setInputSearch] = useState<string>('animaciones');
    const searchRef = useRef<HTMLInputElement>(null);
    
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        
        //Capturo el valor de la caja de texto del usuario
        const searchTerm = searchRef.current ? searchRef.current.value : '';
        //Si hay un texto de busqueda, debemos asegurarnos que al menos la cantidad de caracteres sea mayor a 2
        const isTermValid = searchTerm && searchTerm.trim().length > 2
        
        //Si el usuario pulsa ENTER y el TERMINO de busqueda es valido, seteamos el estado
        if(e.code === 'Enter' && isTermValid) {
            setInputSearch(searchTerm);
        }
    }

    return (
       <Container>
           <Row>
                {/* Aqui agregaremos un logo animado */}
           </Row>
           <Row className="mt-5">
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
                        ref={ searchRef }
                        onKeyDown={ handleSearch }
                        />
                </InputGroup>               
           </Row>
           <Suggestions term={ inputSearch } />
           <Result term={ inputSearch } type='gifs'/>
           
       </Container>
    )
}

export default Home
