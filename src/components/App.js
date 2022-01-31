import React from 'react';
import '../styles/App.scss';
import { withRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <>
            <div className='app'>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route component={NotFound}/>
                </Switch>
                <Footer />
            </div>
        </>
    )
}

export default withRouter(App);
