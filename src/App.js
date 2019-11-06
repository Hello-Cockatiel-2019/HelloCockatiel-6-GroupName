import React from 'react';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Data/Home';
import Topic1 from './components/Data/Topic1';
import Topic2 from './components/Data/Topic2';
import Topic3 from './components/Data/Topic3';
import Topic4 from './components/Data/Topic4';
import Indexbuttons from './components/Buttons/Indexbutton';
import Homebutton from './components/Buttons/Homebutton';
import Credit from './components/Data/Credit';


function App() {
  return (
    <div className="App">
      <div className="page">
     <Home />
      <Topic1/>
      <Topic2/>
      <Topic3/>
      <Topic4/>
      <Credit/>
       
    </div>
       
       
     
       
    </div>
  );
};

export default App;
