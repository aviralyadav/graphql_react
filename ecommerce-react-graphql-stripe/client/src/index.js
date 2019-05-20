import React from 'react';
import ReactDOM from 'react-dom';
import 'gestalt/dist/gestalt.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';

const Routes = () => (
    <Router>
        <React.Fragment>
            <Navbar />
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/checkout" component={Checkout} />
        </Switch>
        </React.Fragment>
    </Router>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
