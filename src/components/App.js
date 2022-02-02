import React from 'react';
import '../styles/App.scss';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Homepage from '../pages/Homepage';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <>
            <Helmet>
                <meta name='description' content="Ollin salon is a creative space with the primary goal to help you embrace who you are and help you align with your inner potential. Ollin’s story is a way of being and self-care should be a way of life."/>
                <title>Ollin Salon | Johnny Ramirez</title>
            </Helmet>
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
