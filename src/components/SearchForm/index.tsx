import { Form, FormControl, InputGroup } from 'react-bootstrap';

import './SearchForm.css';

type Props = {
    handleSubmit: (e: React.FormEvent) => void;
    setInputValue: (state: string) => void;
    inputValue: string;
}

const SearchForm = ({handleSubmit, setInputValue, inputValue}: Props) => {
    return (
        <div>
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
        </div>
    )
}

export default SearchForm;
