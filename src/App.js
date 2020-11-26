import './App.css';
import Header from './pages/Header';
import List from './pages/List';
import React from 'react';
import Newtodo from './pages/Newtodo';

function App() {
  const [add, setAdd] = React.useState(false);
  console.log(add);
  return (
    <>
      <Header />
      <List />

      {add ? <Newtodo /> : ''}
      <button
        onClick={() => {
          setAdd(!add);
        }}
      >
        add
      </button>
    </>
  );
}

export default App;
