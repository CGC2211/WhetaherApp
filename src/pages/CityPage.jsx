import React, { useState, useEffect} from 'react'
import axios from 'axios'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import 'moment/locale/es'
import { useParams } from 'react-router-dom'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import Forecast from './../components/Forecast'
import ForecastChart from './../components/ForecastChart'
import AppFrame from './../components/AppFrame'

const forecastItemListExample = [
	{hour: 18, state:"clear", temperature:20, weekDay:"Jueves"},
	{hour: 6, state:"clouds", temperature:16, weekDay:"Viernes"},
	{hour: 12, state:"fog", temperature:14, weekDay:"Viernes"},
	{hour: 18, state:"clouds", temperature:16, weekDay:"Viernes"},
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
	const [data, setData] = useState(null)
	const [forecastItemList, setforecastItemList] = useState(null)
	
	const {city,countryCode} = useParams()

	useEffect( () => {
		
		const getForecast = async () => {
			const apiId = "22fa609832d495d926a89a4faefeff3e";
			const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiId}`
			
			try{
				const { data } = await axios.get(url)

				console.log("la data ",data)

				const toCelsius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0))
				const daysAhead = [0,1,2,3,4,5]
				const days = daysAhead.map(day => moment().add(day,'d'))
				const dataAux = days.map(day => {
					/* 	"dayHour": "Jue 18",
						"min": 14,
						"max": 22*/

						const tempObjArray = data.list.filter(item => {
							const dayOfYear = moment.unix(item.dt).dayOfYear()
							return dayOfYear === day.dayOfYear()
						})

						console.log("day.dayofYer",day.dayOfYear())
						console.log("tempObjArray ", tempObjArray)

						const temps = tempObjArray.map(item => item.main.temp)
						
						
						return({
							dayHour: day.format('ddd'),
							min: toCelsius(Math.min(...temps)),
							max: toCelsius(Math.max(...temps))
						})
				})
				setData(dataAux)

				//{hour: 12, state:"rain", temperature:14, weekDay:"Sabado"},
				const interval = [4,8,12,16,20,24]

				const forecastItemListAux = data.list
				.filter((item, index) => interval.includes(index))
				.map(item => {
					return ({
						hour: moment.unix(item.dt).hour(),
						weekDay: moment.unix(item.dt).format('dddd'),
						state: item.weather[0].main.toLowerCase(),
						temperature: toCelsius(item.main.temp)
					})
				})

				console.log("forecastItemListAux",forecastItemListAux)

				setforecastItemList(forecastItemListAux)
				
			}catch (error){
				console.log(error)
			}
		}
		
		getForecast()
		

	}, [city, countryCode])

	const country = "Argentina"
	const state = "clear"
	const temperature = 20
	const humidity = 80
	const wind = 5
	/*const data = dataExample
	const forecastItemList = forecastItemListExample*/

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
				{
					data && <ForecastChart data={data} />
				}
			</Grid>
			<Grid item>
				{
					forecastItemList && <Forecast forecastItemList={forecastItemList} />
				}
				
			</Grid>
		</Grid>
	</AppFrame>
	)
}

export default CityPage
