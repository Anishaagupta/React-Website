import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Services from '../pages/Services';
import Products from '../pages/Products';
import Contact from '../pages/Contact';

const AppRouter = () =>{
    return (
        <div>
           <Router>
           <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/services" component={Services}/>
              <Route exact path="/products" component={Products}/>
              <Route exact path="/contact" component={Contact}/>
            </Switch>
           </Router>
        </div>
    )
}


export default AppRouter;