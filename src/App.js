import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [unidad, setDolar] = useState(0);
  const [decena, setEuro] = useState(0);
  const [centena, setBitcoin] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(tipo);
    setDolar((total * tipo));
    switch (tipo) {
      case "1":
        setEuro((total * tipo)*0.85);
        setBitcoin((total * tipo)*0.000022);
        break;
      case "0.85":
        setEuro((total));
        setBitcoin((total)*0.000026);
        break;
      case "0.000022":
        setDolar((total)*45925.10);
        setEuro((total)*39114.41);
        setBitcoin((total));
        break;
      default:
        setEuro((total * tipo)*0.85);
        setBitcoin((total * tipo)*0.000022);
        break;
    }

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

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolar</option>
        <option value={0.85}>Euro</option>
        <option value={0.000022}>Bitcoin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
