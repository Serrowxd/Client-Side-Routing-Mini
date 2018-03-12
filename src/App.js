import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import { Navigation, Home, About, Contact} from './components'; // You don't need to add index to the end because it's already defaulting to the index - which is what it looks for automatically.

const App = () => (
  <div>
    <Navigation />
    <Route exact path = "/" component = { Home } />
    <Route path = "/about" component = { About } />
    <Route path = "/contact" component = { Contact } />
  </div>
)

// exact path means you will only render home when you load the page

export default App;
