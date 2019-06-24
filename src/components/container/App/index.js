import React from 'react';
import './styles.css';
import { Store } from '../../../data/Store';

function App({children}) {
  const { state, dispatch } = React.useContext(Store);
  const fetchDataAction = async () => {
    const data = await fetch('/.netlify/functions/config');
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON.data
    });
  };
  React.useEffect(() => {
    state.config.length === 0 && fetchDataAction();
  });
  return (
    <div className="App">
      {console.log(state)}
      {children}
    </div>
  );
}

export default App;
