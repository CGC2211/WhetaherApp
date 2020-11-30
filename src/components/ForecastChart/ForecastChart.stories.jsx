import React from 'react'
import ForecastChart from './ForecastChart'

export default {
	title: "ForecastChart",
	component: ForecastChart
}

// dia y hora "DDD HH"
// tres posiciones para el diua y dos para la hora
// min: Temperatura Mininma
// max: Temperatura Maxima

const data = [
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

export const ForecastChartExample = () => (
	<ForecastChart data={data} />
)