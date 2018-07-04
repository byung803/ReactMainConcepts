import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Contents from './components/Contents';
import NotFound from './components/NotFound';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/' component={Home} exact={true} />
                    <Route path='/contents/:title' component={Contents} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;