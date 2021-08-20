import React from 'react';
import { Profile, LoginForm } from './components';
import { Provider } from 'react-redux';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Profile />
        <LoginForm />
      </div>
    </Provider>
  );
};

export default App;
