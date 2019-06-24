import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/container/App';
import Segment from './components/container/Segment';
import { StoreProvider } from './data/Store';

ReactDOM.render(
  <StoreProvider>
    <App>
      <main>
        {/* <nav>
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
        </nav> */}
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
  </StoreProvider>
, document.getElementById('root'));
