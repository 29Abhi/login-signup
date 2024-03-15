import React from 'react';
import RegistartionScreen from './Screen/RegistartionScreen';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/Store';
import persistStore from 'redux-persist/es/persistStore';
let persistor = persistStore(store)
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
    <div className="App">
  <RegistartionScreen/>
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
