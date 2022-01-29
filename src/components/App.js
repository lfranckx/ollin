import React from 'react';
import '../styles/App.scss';
import { withRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
    return (
        <>
            <div className='app'>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                </Switch>
                <Footer />
            </div>
        </>
    )
}

export default withRouter(App);
