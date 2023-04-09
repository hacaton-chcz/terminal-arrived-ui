import React, { useState } from 'react'
import './App.css';
import axios from 'axios';

function Form() {
  const [invoiceId, setInvoiceId] = useState();
  const [isArrived, setIsArrived] = useState(false);

  function handleArrived() {
    setIsArrived((prev) => (prev === true ? false : true))
  }

  function handleInvoiceId(evt) {
    setInvoiceId(evt.target.value)
  }

  function sendInvoiceUpdate() {
    const dataToSend = {
      InvoiceId: invoiceId,
      IsArrived: isArrived
    };
    axios.post(`http://localhost:5230/api/set-arrival`, { dataToSend })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <form>
      <label for="invoiceId">
        Номер накладной:
        <input
          name="invoiceId"
          value={invoiceId}
          onChange={handleInvoiceId} />
      </label>
      <br />
      <label for="isArrived">
        Приехал:    
        <input
          name="isArrived"
          type="checkbox"
          checked={isArrived}
          onChange={handleArrived} />
      </label>
      <br />
      <button type='button' onClick={sendInvoiceUpdate}>Отправить данные</button>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <h1>КПП</h1>
      <Form />
    </div>
  );
}

export default App;
