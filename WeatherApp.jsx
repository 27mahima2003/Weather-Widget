import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react"
import "./WeatherApp.css";

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 42.37,
        temp: 43.16,
        humidity: 16,
        wind: 4.1,
        tempMin: 43.16,
        tempMax: 43.16,
        weather: "Clear Sky",
    });

    let updateInfo =(newInfo)=>{
     setWeatherInfo(newInfo);
    }

    return (
        <div style = {{textAlign: "center"}}>
            <h2 >Weather App by Mahima Verma</h2>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherInfo}/>

        </div>
        );
}