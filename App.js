
import { useState } from 'react';
import './App.css';

function App() {

  const [state,setState]=useState("Marco");
  const [toggler,setToggler]=useState("Polo");

  const onClickHandler=()=>{
    if(state==='Marco'){
      setState('Polo');
      setToggler('Marco');
    }
    else{
      setState("Marco");
      setToggler("Polo");
    }
  
    
  }

  return (
    <div className="App">
    <h1 id="marco-polo">{state}</h1>

      <button id="marco-polo-toggler" onClick={onClickHandler}>{toggler}</button>
    </div>
  );
}

export default App;
