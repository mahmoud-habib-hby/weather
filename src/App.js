import { useState } from 'react';
import './App.css';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [city,setCity]=useState("");
  const [weather,setweather]=useState(null);
  const [error,seterror]=useState("")
  const api ="59abd65cb7309eac0b29f132dba0477b";
  const app= async()=>{
     try{
          const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`) ;
          setweather(response.data)
          seterror("")
     }catch(err){
      seterror(`${city} wrong`)
      setweather(null)
     }
     }
     const click=()=>{
      if(city.trim){
        app()
      }
     }
     
  return (
  <>
    <div className="app position-absolute top-50 start-50 translate-middle"  >
    <h3  style={{padding:"5px",textAlign:"center"}} className='text-white' >weater app</h3>
      <div className='input-group mb-3'>
        <input 
          value={city}
          onChange={(e)=> setCity(e.target.value)}
          placeholder='المكان'
          type='text'
          className="input form-control"
        >
        </input>
        <button onClick={click} className="btn btn-success">search</button>
      </div>
      
      {error && <p className='p-3 mb-2 bg-danger text-white' >{error}</p>}
      {weather &&(
        <div>
        <p style={{width:"100%",textAlign:"center" ,color:"white"}}> {city}</p>
        <p className='text-bg-danger p-3' style={{textAlign:"center"}}> درجة الحرارة  : {weather.main.temp}</p>
        <p className='p-3 mb-2 bg-dark-subtle text-dark-emphasis' style={{textAlign:"center"}}> الضغط الجوى  : {weather.main.pressure}</p>
        <p className='p-3 mb-2 bg-primary-subtle text-primary-emphasis' style={{textAlign:"center"}}>  سرعة الهواء  : {weather.wind.speed}</p>
        <p className='p-3 mb-2 bg-warning text-dark' style={{textAlign:"center"}}>  الرطوبة : {weather.main.humidity}</p>
        </div>
      )}
        
      
    </div>
      </>
  );
}

export default App;
