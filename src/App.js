import Button from 'react-bootstrap/Button'; // file external diatas

import './App.css'; //file internal dibawah

function App() {
  return (
    <div class="container">
        <h1>Weather App</h1>
        <table class="centerContainer">
            <tr>
                <td>
                    <label 
                    id="citylabel" 
                    for="cityNameTextField" 
                    style={{color: "black"}}
                    >Enter a city:
                    </label>
                </td>
            </tr>
            <tr>
                <td>
                    <input id="cityNameTextField" type="text" name="cityName" />
                    <Button
                    onClick={() => {
                        alert("This function is not available yet");
                    }}
                    id="submitButton"
                    type="submit"
                    >
                        Submit
                    </Button>
                    <input/>
                </td>
            </tr>
        </table>
        <div class="spacer"></div> 
        <div 
            id="errorMessageComponent"
            style={{display: "none", color: "#fc574e"}}> 
        </div> 
        <div 
            id="loader"
            style={{display: "none"}} 
            class= "spinner-border"
            role="status"
            > 
            <span class="sr-only">Loading...</span>
        </div> 
        <div id="weatherInfoComponent" style={{display: "none"}}> 
            <table width="50%" class="centerContainer" cellpaddings="5px">
                <tr>
                    <th>Temperature</th>
                    <td id="temperatureField">0</td>
                </tr>
                <tr>
                    <th>Feels like</th>
                    <td id="feelsLikeField">0</td>
                </tr>
                <tr>
                    <th>Humidity</th>
                    <td id="humidityField">0</td>
                </tr>
                <tr>
                    <th>Atmospheric Pressure</th>
                    <td id="pressureField">0</td>
                </tr>
            </table>
        </div>   
        
    </div>
  );
}

export default App;
