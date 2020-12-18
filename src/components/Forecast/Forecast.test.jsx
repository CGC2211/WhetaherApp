import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
	{hour: 18, state:"clear", temperature:20, weekDay:"Jueves"},
	{hour: 6, state:"clouds", temperature:16, weekDay:"Viernes"},
	{hour: 12, state:"fog", temperature:14, weekDay:"Viernes"},
	{hour: 18, state:"drizzle", temperature:16, weekDay:"Viernes"},
	{hour: 6, state:"rain", temperature:14, weekDay:"Sabado"},
	{hour: 12, state:"thunderstorm", temperature:14, weekDay:"Sabado"},
]

test("Forecast render", async () => {
	// ¿Como encontrar los items?
	// findAllByTestId nos va a permitir encontrar cada item con esa marca
	const { findAllByTestId } = render(
			<Forecast 
				forecastItemList={forecastItemList} />)
	const forecastItems = await findAllByTestId("forecast-item-container")

	expect(forecastItems).toHaveLength(6)
})