import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import TextareaTest from './components/TextareaTest';
import InputTest from './components/InputTest';
import SelectText from './components/SelectTest';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact={true} path='/' component={Home} />
                        <Route path='/textarea' component={TextareaTest} />
                        <Route path='/select' component={SelectText} />
                        <Route path='/input' component={InputTest} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter; 