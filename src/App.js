import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/NavBar';
import Footer from './Components/Footer';

import About from './Pages/About';
import Home from './Pages/Home';
import AllProducts from './Pages/AllProducts';
import Terms from './Pages/Terms';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/products' exact component={AllProducts} />
        {/* <Route path='/products/:id' component={ProductDetails} /> */}
        <Route path='/terms' exact component={Terms} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
