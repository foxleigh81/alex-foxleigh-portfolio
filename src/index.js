import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/container/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App>
    <div className="segment">
      <header>
        <h1>Good Morning</h1>
        <h2>I'm Alex, I like to make things</h2>
      </header>
      <div className="avialability">
        <p>If you wish to hire me, you're in luck, I'm <strong>currently available</strong> for remote projects</p>
      </div>
    </div>
  </App>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
