import React from 'react'
import Forecast from './Forecast'

export default {
	title: "Forecast",
	component: Forecast
}

const forecastItemList = [
	{hour: 18, state:"sunny", temperature:20, weekDay:"Jueves"},
	{hour: 6, state:"cloud", temperature:16, weekDay:"Viernes"},
	{hour: 12, state:"fog", temperature:14, weekDay:"Viernes"},
	{hour: 18, state:"cloudy", temperature:16, weekDay:"Viernes"},
	{hour: 6, state:"rain", temperature:14, weekDay:"Sabado"},
	{hour: 12, state:"rain", temperature:14, weekDay:"Sabado"},
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)