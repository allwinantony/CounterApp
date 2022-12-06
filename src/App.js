import { useState } from 'react';
import './App.css';

function App() {
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>

  const [counter,setCounter]=useState(0);
  //counter-state(to hold value)
  //setCounter-set value tothe counter
  function incrementCounter(){
    setCounter(counter+1);
  }
  function decrementCounter(){
    setCounter(counter-1);
  }
  function resetCounter(){
    setCounter(0);
  }
  return (
    <div className="App" style={{display:'flex', justifyContent:'center'}}>
      <header className="App-header">
      <div id='head' style={{display:'flex', justifyContent:'center', padding:'10px'}}><h1>Counter Application</h1></div><hr/>
      <div style={{display:'flex', justifyContent:'center', color:'white', fontSize:'50px'}}><h1>{counter}</h1></div><hr/>
      <div style={{marginLeft:'13px'}}>  
        <button onClick={incrementCounter} style={{backgroundColor:'green', color:'white', margin: '5px', padding: '10px'}}>Increment</button>
        <button onClick={decrementCounter} style={{backgroundColor:'red', color:'white', margin: '5px', padding: '10px'}}>Decrement</button>
        <button onClick={resetCounter} style={{backgroundColor:'black', color:'white', margin: '5px', padding: '10px', paddingLeft:'25px', paddingRight:'30px'}}>Reset</button>
      </div>
      </header>
      {/* <h1 class="text-light">bootstrap</h1> */}
    </div>
  );
}

export default App;
