import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <NoteForm />
        <NoteList />
      </div>
    </Provider>
  );
};

export default App;
