import React,{ useState } from 'react';
import './App.css';

export default function App() {
  const [minval,setMinval]=useState(0);
  const [maxval,setMaxval]=useState(0);
  const [random,setrandom]=useState(0);


  const handleRandom=()=>{
    let rand=Math.floor((Math.random()*maxval)+minval);
    while(rand>maxval){
      rand=Math.floor((Math.random()*maxval)+minval);
    }
    setrandom(rand);
  };
return (
    
    <body>
      <div className='App'>
          <h1>Random no generator</h1>

          <div className="Box">
          
           <h3>Random No: {random}</h3>  
              
            <h3>Min No:<input type="number" value={minval} onChange={e=>setMinval(+e.target.value)}/></h3>
            
            <h3>Max No:<input type="number" value={maxval} onChange={e=>setMaxval(+e.target.value)}/></h3>

            <button onClick={handleRandom}>Generate Random No</button>
            
          </div>
      </div>
    </body>
  );
}

