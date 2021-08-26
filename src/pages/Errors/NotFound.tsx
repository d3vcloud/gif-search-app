import { Alert, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
    return (
        <Container className='container-error'>
            <Row>
                <Col sm={12}>
                    <div className='message'>
                        <Alert variant='dark'>
                            <h1>404</h1>
                            <h5>La página que estas buscando no está disponible</h5>
                            <Link to='/' className='btn btn-primary'>Ir al Home</Link>
                        </Alert>
                    </div>
                </Col>	               
            </Row>
        </Container>
    )
}

export default NotFound
