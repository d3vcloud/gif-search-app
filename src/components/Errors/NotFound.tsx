import { Link } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container container-error'>
                <div className='row'>	
                    <div className='col-sm-12'>
                        
                        <div className='message'>
                            <h1>404</h1>
                            <h5>La página que estas buscando no está disponible</h5>
                            <Link to='/' className='btn btn-primary'>Ir al Home</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default NotFound
