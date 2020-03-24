import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Panel from './component/Panel'
import store from './stores'

function App() {
  return (
      <div className="App">
          <Provider store={store}>
            <Panel></Panel>
          </Provider>
      </div>
  );
}

export default App;
