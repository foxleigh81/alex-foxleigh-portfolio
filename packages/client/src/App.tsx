import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import logo from './logo.svg';
import './App.css';
 
 class App extends Component {
   render() {
     return (
      <BrowserRouter>
         <div className="App">
           <header className="App-header">
            <Link to="/">
               <img src={logo} className="App-logo" alt="logo" />
            </Link>
             <h1 className="App-title">Welcome to React</h1>
            <Link to="/">Home</Link> <Link to="/post/">Post</Link>
           </header>
-        <p className="App-intro">
-          To get started, edit <code>src/App.js</code> and save to reload.
-        </p>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/post/" component={Post} /> */}
          </Switch>
         </div>
      </BrowserRouter>
     );
   }
 }

 export default App