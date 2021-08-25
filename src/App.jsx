import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect}  from 'react-router-dom';
import './main.scss';

import Topbar from './Component/Topbar';
import Navigation from './Navbar/Navigation';
import Errorpage from './Errorpage';

import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Faq from './Component/Pages/Faq';
import Listening from './Component/Pages/Listening';
import Reading from './Component/Pages/Reading';
import Speaking from './Component/Pages/Speaking';
import Writing from './Component/Pages/Writing';
import WritingTask1 from './Component/Pages/WritingTask1';
import WritingTask2 from './Component/Pages/WritingTask2';


class App extends Component {

    render(){

        return (
            <div className="app">
                <Router>
                    <Topbar />
                    <Navigation />

                    <div className="sections">

                    <Switch>
                        <Route path='/' exact component={Home} />

                        <Route path='/contact' exact component={Contact} />

                        <Route path='/faq' exact component={Faq} />

                        <Route path='/listening' exact component={Listening} />
                        <Route path='/reading' exact component={Reading} />
                        <Route path='/speaking' exact component={Speaking} />
                        <Route path={'/writing'} exact component={Writing} />
                        <Route path={'/writing/task1'} exact={true} component={WritingTask1} />
                        <Route path={'/writing/task2'} exact={true} component={WritingTask2} />

                        <Route path={'/task1'} exact component={Writing} />
                        <Route path={'/task2'} exact component={Writing} />



                        <Route path="/pagenotfound" exact component={Errorpage} />
                        <Redirect to="/pagenotfound" />
                    </Switch>

                    </div>

                    
                </Router>
            </div>
        );
    }
    
}
export default App;