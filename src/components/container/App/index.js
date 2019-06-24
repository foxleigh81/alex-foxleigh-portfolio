import React from 'react';
import './styles.css';
import { Store } from '../../../data/Store';

import Segment from '../Segment';
const NavBar = React.lazy(() => import('../NavBar'))

const fetchAction = async (name, dispatch) => {
  const data = await fetch(`/.netlify/functions/${name.toLowerCase()}`);
  const dataJSON = await data.json();
  return dispatch({
    type: `FETCH_${name.toUpperCase()}`,
    payload: dataJSON.data
  });
}

function App() {
  const { state, dispatch } = React.useContext(Store);
 
  React.useEffect(() => {
    state.config.length === 0 && fetchAction('config', dispatch)
    state.brands.length === 0 && fetchAction('brands', dispatch)
    state.segments.length === 0 && fetchAction('segments', dispatch)
    state.feedback.length === 0 && fetchAction('feedback', dispatch)
    state.form.length === 0 && fetchAction('form', dispatch)
  });

  const props = {
    config: state.config,
    brands: state.brands,
    segments: state.segments,
    feedback: state.feedback,
    form: state.form,
  }

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <NavBar {...props.config} />
          <main>
            <Segment entry="/">
              <header>
                <h1>Good Morning</h1>
                <h2>I'm Alex, I like to make things</h2>
              </header>
              <div className="availability">
                <p>If you wish to hire me, you're in luck, I'm <strong>currently available</strong> for remote projects</p>
              </div>
            </Segment>
          </main>
        </div>
      </React.Suspense>
    </React.Fragment>
  );
}

export default App;
