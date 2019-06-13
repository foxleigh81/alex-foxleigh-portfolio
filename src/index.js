import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/container/App';
import Segment from './components/container/Segment';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App>
    <main>
      <nav>
        <ul className="primary">
          <li><a href="">Download Latest CV</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact me</a></li>
        </ul>
        <ul className="social">
          <li><a href="">Facebook</a></li>
          <li><a href="">LinkedIn</a></li>
          <li><a href="">GitHub</a></li>
          <li><a href="">Instagram</a></li>
        </ul>
      </nav>
      <Segment>
        <header>
          <h1>Good Morning</h1>
          <h2>I'm Alex, I like to make things</h2>
        </header>
        <div className="availability">
          <p>If you wish to hire me, you're in luck, I'm <strong>currently available</strong> for remote projects</p>
        </div>
      </Segment>
    </main>
  </App>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
