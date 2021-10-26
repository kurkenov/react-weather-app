
import React, {useState} from 'react';
import './App.css'
function App() {


  const apiKey = 'ca89aa6a05d3d229171771c97d864ac9';
  const [weatherData,setWeatherData] = useState([{}])
  const [city,setCity] = useState("") 

  const getWeather = (event) => {
    if(event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
        response => response.json()
        ).then(
            data =>{
            setWeatherData(data)
            setCity("")
          }
        )
      }
  }

  return (
    <div className="container">
        <input 
        className="input" 
        placeholder="Enter city ..."
        onChange ={e =>setCity(e.target.value)} 
        value={city}
        onKeyPress={getWeather}/>

        {typeof weatherData.main === 'undefined'?(
        <div>
            <p>Welcome to Weather App. Please enter correct name of city</p>
        </div>
        ): (
            <div>
              <p>{weatherData.name}</p>
              <p>{weatherData.main.temp} &#x2103;</p>
              <p>{weatherData.main.humidity} %</p>
              <p>{weatherData.weather[0].main}</p>
            </div>
        )}

    </div>
  );
}

export default App;
