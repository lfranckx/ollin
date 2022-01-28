import React from 'react';
import '../styles/App.scss';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Homepage from '../pages/Homepage';
import Navbar from './Navbar';


function App() {
    return (
        <>
            <Helmet>
                <title>Ollin | Johnny Ramirez</title>
            </Helmet>
            <div className='app'>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                </Switch>
            </div>
        </>
    )
}

export default withRouter(App);
