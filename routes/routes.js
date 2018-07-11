import React from 'react';
import React {BrowserRouter, Router, Switch} from "react-router-dom";

import homepage from './components/pages/homepages'
import login from './components/pages/login'
import signup from './components/pages/signup'

const Routes = () => (
    <BrowseRoutes>
    <switch>
    <Route exact path='/' component={homepage}/>
    <Route  path='/' component={login}/>
    <Route  path='/' component={signup}/>
    <route path='*' component={Notfound}/>
    </switch>
    </BrowseRoutes>
);

export default Routes;