import React, {useState, useEffect} from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
	const [var_data, set_data] = useState(null)
	useEffect(() => {
		fetchData();
		
	}, [])

	async function fetchData() {
		const url = 'http://api.openweathermap.org/data/2.5/weather?q=lahore&units=metric&appid=fa66506ffa308c3cc8af36bdb1e93347';
		try{
			const response = await fetch(url);
			const data = await response.json();
			set_data(data.main);
			console.log(var_data);
		} catch(err) {
			console.log(err)
		}
	}

	return (
		<div className="App">
			<WeatherCard temp={var_data.temp} />
		</div>
	);
}

export default App;
