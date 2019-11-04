import React from 'react';
import './App.css';
import ContentLists from './components/ContentLists/';
import './style.css';
import Buttons from './components/Buttons/';
function App() {
  return (
    <div className="App">
       {/* Leopard */}
      <h1>เสือรู้สึกเเย่ เสือเสียใจ เสือจะร้องไห้ เพราะเสือdown</h1> 
       <ContentLists/>
       <Buttons/>
    </div>
  );
};

export default App;
