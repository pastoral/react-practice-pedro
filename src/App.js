import './App.css';
import  axios  from 'axios';
import { useEffect, useState } from 'react';

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res)=>res.json())
  //     .then((data)=>{
  //       console.log(data)
  //     })

  const fetchCatFact = () =>{
    axios("https://catfact.ninja/fact")
                    .then((res)=>{setCatFact(res.data.fact)}) // fact is a property of the object
                                                              // returned from API
  }

  const fetchAge = () => {
    axios(`https://api.agify.io/?name=${name}`)
    .then((res)=>{
      // console.log(res.data)
      setPredictedAge(res.data)
    })
  }

  const fecthExcuses = (fetchType)=>{
    axios(`https://excuser-three.vercel.app/v1/excuse/${fetchType}/`).then((res)=>{
       console.log(res.data[0].excuse)
       setExcuse(res.data[0])
       //console.log(excuses)
      
    })
    
  }

  const [catFact, setCatFact] = useState("")
  const [predictedAge, setPredictedAge] = useState(null)
  const [name, setName] = useState("")
  const [excuses, setExcuse] = useState(null)

  useEffect(()=>{
    fetchCatFact()
    //fetchAge()
  },[])
  return (
    <div className="App">
      <div>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
      </div>

      <div>
        <input placeholder='ex.. Munir...' onChange={(event)=>{
          setName(event.target.value)
        }}/>
        <button onClick={fetchAge}>Predict Age</button>
        <div>
          <h2>Name: {predictedAge?.name}</h2>
          <h2>Age: {predictedAge?.age}</h2>
          <h2>Count: {predictedAge?.count}</h2>
        </div>
      </div>

      <div>
        <h1>Show excuses</h1>
        <div>
          <button onClick={()=>fecthExcuses('party')} > Party</button>
          <button onClick={()=>fecthExcuses('family')}> Family</button>
          <button onClick={()=>fecthExcuses('office')}> Office</button>
        </div>
        <div>
          <h3>Excuse: {excuses?.excuse}</h3>
        </div>
       
      </div>
      
    </div>
  );
}

export default App;
