//here all routes
import React from 'react';
import LandingPage from './landing-page';
import About from './about-me';
import Contact from './contact';
import Resume from './resume';
import { Switch , Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path = "/" component={LandingPage}/>
        <Route exact path = "/aboutme" component={About}/>
        <Route exact path = "/contact" component={Contact}/>
        <Route exact path = "/resume" component={Resume}/>
    </Switch>
)

export default Main;