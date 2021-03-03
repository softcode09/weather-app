import React, {useState, useEffect} from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';

const url = 'http://api.openweathermap.org/data/2.5/weather?q=abbottabad&units=metric&appid=fa66506ffa308c3cc8af36bdb1e93347';
function App() {
	const [forecast, setForecast] = useState([]);
	const [error, setError] = useState();

	const fetchForecast = async () => {
		try {
			const response = await fetch(url);
			const responseJson = await response.json();
			setForecast(responseJson);
		} catch (error) {
			setError(error)
		}
	}
	
	useEffect( () => {
		fetchForecast()
	}, [])

	console.log(forecast.main);
	return (
		<div className="App">
			<WeatherCard
				city={forecast.name}
				temp={forecast.main.temp}
				humidity={forecast.main.humidity}
				windSpeed={forecast.wind.speed}
				degree={forecast.wind.speed}
				weather={forecast.weather[0].main}  />
		</div>
	);
}

export default App;
