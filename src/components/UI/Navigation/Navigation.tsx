import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import NotFound from '../../Errors/NotFound';
import History from '../../History';
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
                        <Route exact path="/history" component={ History } />
                        <Route component={ NotFound } />
                    </Switch>
                </>
            </Router>

        </>
    )
}

export default Navigation;
