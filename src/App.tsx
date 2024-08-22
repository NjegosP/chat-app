import React from 'react';
import './App.css';
import { Contacts } from './components/contacts/Contacts';
import { Conversation } from './components/conversation/Conversation';

function App() {
  return (
    <div className="flex flex-row min-h-dvh">
      <Contacts />
      <Conversation />
    </div>
  );
}

export default App;
