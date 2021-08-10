import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect}  from 'react-router-dom';
import './main.scss';

import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Faq from './Component/Pages/Faq';
import Listening from './Component/Pages/Listening';
import Reading from './Component/Pages/Reading';
import Speaking from './Component/Pages/Speaking';
import Writing from './Component/Pages/Writing';

import Errorpage from './Errorpage';


class App extends Component {
    render()
    {
        return (
            <Router>

               <Switch>

                    <Route path='/' exact component={Home} />

                    <Route path='/contact' exact component={Contact} />

                    <Route path='/faq' exact component={Faq} />

                    <Route path='/listening' exact component={Listening} />
                    <Route path='/reading' exact component={Reading} />
                    <Route path='/speaking' exact component={Speaking} />
                    <Route path='/writing' exact component={Writing} />

                    <Route path="/404" exact component={Errorpage} />
                    <Redirect to="/404" />

               </Switch>

            </Router>
        );
    }
}
export default App;