import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import Forecast from './../components/Forecast'
import ForecastChart from './../components/ForecastChart'
import AppFrame from './../components/AppFrame'

const forecastItemListExample = [
	{hour: 18, state:"sunny", temperature:20, weekDay:"Jueves"},
	{hour: 6, state:"cloud", temperature:16, weekDay:"Viernes"},
	{hour: 12, state:"fog", temperature:14, weekDay:"Viernes"},
	{hour: 18, state:"cloudy", temperature:16, weekDay:"Viernes"},
	{hour: 6, state:"rain", temperature:14, weekDay:"Sabado"},
	{hour: 12, state:"rain", temperature:14, weekDay:"Sabado"},
]

const dataExample = [
	{
		"dayHour": "Jue 18",
		"min": 14,
		"max": 22
	},
	{
		"dayHour": "Vie 06",
		"min": 14,
		"max": 18
	},
	{
		"dayHour": "Vie 12",
		"min": 16,
		"max": 24
	},
	{
		"dayHour": "Vie 18",
		"min": 10,
		"max": 14
	},
	{
		"dayHour": "Sab 06",
		"min": 10,
		"max": 14
	},
	{
		"dayHour": "Sab 12",
		"min": 12,
		"max": 20
	}
]


const CityPage = () => {
	const city = "Buenos Aires"
	const country = "Argentina"
	const state = "sunny"
	const temperature = "20"
	const humidity = 80
	const wind = 5
	const data = dataExample
	const forecastItemList = forecastItemListExample

	return (
	<AppFrame>
		<Grid container 
			justify="space-around"
			direction="column"
			spacing={2}>
			<Grid item container 
				justify="center" alignItems="flex-end" 
				xs={12}>
				<CityInfo city={city} country={country} />
			</Grid>
			<Grid container item xs={12}
				justify="center">
					<Weather state={state} temperature={temperature} />
					<WeatherDetails humidity={humidity} wind={wind} />
			</Grid>
			<Grid item>
				<ForecastChart data={data} />
			</Grid>
			<Grid item>
				<Forecast forecastItemList={forecastItemList} />
			</Grid>
		</Grid>
	</AppFrame>
	)
}

export default CityPage
