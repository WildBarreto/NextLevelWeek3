import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanagesMap';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={OrphanageMap}/>
        </BrowserRouter>
    );
}

export default Routes;