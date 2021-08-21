import React from 'react';
// import { Profile, LoginForm } from './components';
import { Routing } from './routing/Routing';
import { Provider } from 'react-redux';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Routing />
      </div>
    </Provider>
  );
};

export default App;
