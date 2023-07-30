import {useState} from 'react';
import './App.css';



function App() {
  const [inputHeight, setInputHeight] = useState('48');
  const [inputWidth, setInputWidth] = useState('98');
  const [inputLength, setInputLength] = useState('1000');
  const [inputPrice, setInputPrice] = useState('25');

  const wUnit = 0.01;
  const hUnit = 0.01;
  const lUnit = 0.01;

  function Volume(props) {
    return inputWidth * wUnit * inputHeight * hUnit * inputLength * lUnit;
  }

  return (
    <div className="App">
      <form>
        <label>Height: <input type="number" value={inputHeight} onChange={e => setInputHeight(e.target.value)} /> mm </label> <br/> 
        <label>Width: <input type="number" value={inputWidth} onChange={e => setInputWidth(e.target.value)} /> mm </label> <br/> 
        <label>Length: <input type="number" value={inputLength} onChange={e => setInputLength(e.target.value)} /> mm </label> <br/> 
        <label>Price: <input type="number" value={inputPrice} onChange={e => setInputPrice(e.target.value)} /> kr </label> <br/> 

      <label>Volume: <Volume/> liter </label> <br/><br/>
      <label>Price per liter: {(inputPrice / Volume()).toFixed(2)} kr </label>
      </form>

    </div>
  );
}

export default App;
