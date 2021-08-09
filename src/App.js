import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [unidad, setUnidad] = useState(0);
  const [decena, setDecena] = useState(0);
  const [centena, setCentena] = useState(0);
  const [umil, setUmil] = useState(0);
  const [dmil, setDmil] = useState(0);
  const [cmil, setCmil] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setUnidad((total * tipo) / 1);
    setDecena((total * tipo) / 10);
    setCentena((total * tipo) / 100);
    setUmil((total * tipo) / 1000);
    setDmil((total * tipo) / 10000);
    setCmil((total * tipo) / 100000);
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Conversor de Divisas</h1>

      <p>Dolar: {unidad}</p>
      <p>Euro: {decena}</p>
      <p>Bitcoin: {centena}</p>
      <p>Unidad Mil: {umil}</p>
      <p>Decena Mil: {dmil}</p>
      <p>Centena Mil: {cmil}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Unidad</option>
        <option value={10}>Decena</option>
        <option value={100}>Centena</option>
        <option value={1000}>Unidad Mil</option>
        <option value={10000}>Decena Mil</option>
        <option value={100000}>Centena Mil</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
