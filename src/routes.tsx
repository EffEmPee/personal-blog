import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import ContactMe from './pages/ContactMe';
import Login from './pages/Login';

function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/contact-me" component={ContactMe} />
            <Route path="/login" component={Login} />
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;