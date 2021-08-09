import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import NotFound from '../../Errors/NotFound';
import Home from '../../Home';
import Search from '../../Search';
import NavBar from '../NavBar/NavBar';

const Navigation = () => {
    return (
        <>
            <Router>
                <>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/search" component={ Search } />
                        <Route component={ NotFound } />
                    </Switch>
                </>
            </Router>

        </>
    )
}

export default Navigation;
