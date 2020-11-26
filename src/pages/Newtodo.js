import { getElementError } from '@testing-library/react';
import React from 'react';

const Newtodo = () => {
  function teste() {
    let local = localStorage.getItem('Lista');
    local = JSON.parse(local);

    let novo = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      date: document.getElementById('date').value,
    };

    local.push(novo);
    local = JSON.stringify(local);

    localStorage.setItem('Lista', local);
    window.location.reload(true);
  }
  return (
    <div>
      <label htmlFor="title">título</label>
      <input type="text" id="title" />

      <label htmlFor="description">descrição</label>
      <input type="text" id="description" />

      <label htmlFor="date">data</label>
      <input type="text" id="date" />

      <button onClick={teste}>Enviar</button>
    </div>
  );
};

export default Newtodo;
