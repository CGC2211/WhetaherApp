import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    { city: "Hermosillo", country: "México", countryCode : "MX" },
    { city: "New York", country: "USA", countryCode : "US" },
    { city: "Buenos Aires", country: "Argentina", countryCode : "AR" },
    { city: "Distrito Federal", country: "México", countryCode : "MX" },
    { city: "Lima", country: "Peru", countryCode : "PE" },
]

test("CityList Renders", async () => {
    ///AAA Arrange Act Assert

	const fnClickOnItem = jest.fn()
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(5)
})

test("CityList click on item", async () =>{
	//debemos simular una accion del usuario; click sobre un item
	//Para eso se utiliza una funcion mock

	const fnClickOnItem = jest.fn()

	const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

	const items = await findAllByRole("button")

	//Ahora, para simular la acción, vamos a utilizar fireEvent
	//fireEvent es parte de la libreria testing-library/react

	fireEvent.click(items[0])

	// ¿Ahora que tuvo que suceder?
	// Se debio de llamar a la función fnClickOnItems una única vez

	expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})