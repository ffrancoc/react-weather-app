import Weather from "../models/weather";

export default async function getWeatherInfo() : Promise<Weather> {    
    const URL = `${import.meta.env.VITE_WEATHER_URL}?key=${import.meta.env.VITE_WEATHER_API_KEY} &q=${import.meta.env.VITE_WEATHER_COUNTRY}&aqi=no`;
    const data = await fetch(URL);
    const result = await data.json();    

    const weather: Weather = {
        locationName: result.location.name,
        locationCountry: result.location.country,
        currentTempC: result.current.temp_c,
        currentTempF: result.current.temp_f,
        currentIsDay: result.current.is_day,
        currentCondition: result.current.condition.text,
        currentConditionIcon: result.current.condition.icon,
        currentWindMPH: result.current.wind_mph,
        currentWindKPH: result.current.wind_kph,
        currentHumidity: result.current.humidity,
        currentIsCloudy: result.current.cloud,
        currentWindDir: result.current.wind_dir
    }    

    console.log(result)
    return weather
}