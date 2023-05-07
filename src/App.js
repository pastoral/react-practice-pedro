import './App.css';
import  axios  from 'axios';

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res)=>res.json())
  //     .then((data)=>{
  //       console.log(data)
  //     })

  const catData =  axios("https://catfact.ninja/fact")
                    .then((res)=>{console.log(res.data)})

  return (
    <div className="App">
      <button>Generate Cat Fact</button>
      <p></p>
    </div>
  );
}

export default App;
