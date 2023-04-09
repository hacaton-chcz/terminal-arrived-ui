import React, { useState } from 'react'
import './App.css';
import axios from 'axios';

function Form() {
  const [invoiceId, setInvoiceId] = useState();

  function handleInvoiceId(evt) {
    setInvoiceId(evt.target.value)
  }

  function sendInvoiceUpdate() {
    axios.post(`http://localhost:5000/store/arrived/${invoiceId}`)
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
      <button type='button' onClick={sendInvoiceUpdate}>Отправить данные</button>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <h1>КПП №6</h1>
      <Form />
    </div>
  );
}

export default App;
