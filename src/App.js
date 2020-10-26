import React, {useState, useEffect} from 'react';
import './styles.css';

import array from './array';

import MapImage from './assets/Mapa-do-Maroto.jpg';
import FootImage from './assets/pegada.png';

function App() {
  const [lines, setLines] = useState([]);
  const [harry, setHarry] = useState([14]);
  const [lupin, setLupin] = useState([214]);
  const [severo, setSevero] = useState([102]);
  const [rabicho, setRabicho] = useState([830]);

  useEffect(() => {
    setLines(array);
  }, [setLines]);

  function nextMove(){
    setHarry([...harry, harry[harry.length-1] + 1]);
    setLupin([...lupin, lupin[lupin.length-1] - 1]);
    setSevero([...severo, severo[severo.length-1] - 1]);
    setRabicho([...rabicho, rabicho[rabicho.length-1] + 1]);
  }
  
  return (
    <div className="App">
     <div className="map">
       <img src={MapImage} alt="Mapa"/>
       <div className="grid">
         <div className="grid grid-template-columns-6">
         {lines.map(i => {
           if(harry.includes(i)){
             const pos = harry.indexOf(i);
             let final = false
             if(pos === harry.length-1) final = true;
             return <div key={i} class="item">
              <img src={FootImage} alt="Pegada"/>
              {final && <p>Harry</p>}
             </div>;
           }else if(lupin.includes(i)){
            const pos =lupin.indexOf(i);
            let final = false
            if(pos ===0) final = true;
             return <div key={i} class="item">
                <img src={FootImage} alt="Pegada"/>
                {final && <p>Lupin</p>}
             </div>
           }else if(severo.includes(i)){
            const pos = severo.indexOf(i);
            let final = false
            if(pos === 0) final = true;
             return <div key={i} class="item">
                <img src={FootImage} alt="Pegada"/>
                {final && <p>Severo</p>}
             </div>
           }else if(rabicho.includes(i)){
            const pos = rabicho.indexOf(i);
            let final = false
            if(pos === rabicho.length-1) final = true;
             return <div key={i} class="item">
                <img src={FootImage} alt="Pegada"/>
                {final && <p>Rabicho</p>}
             </div>
           }else{
             return <div key={i} class="item"></div>
           }
         })}
        </div>
       </div>
     </div>

     <button onClick={nextMove} id="next">Próximo Movimento</button>
    </div>
  );
}

export default App;
