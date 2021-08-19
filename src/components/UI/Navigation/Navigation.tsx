import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import NotFound from '../../../pages/Errors/NotFound';
import NavBar from '../NavBar/NavBar';

import Home from '../../../pages/Home';

const Navigation = () => {
    return (
        <>
            <Router>
                <>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route component={ NotFound } />
                    </Switch>
                </>
            </Router>

        </>
    )
}

export default Navigation;
