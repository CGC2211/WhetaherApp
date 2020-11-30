import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    { city: "Hermosillo", country: "México" },
    { city: "New York", country: "USA" },
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Distrito Federal", country: "México" },
    { city: "Lima", country: "Peru" },
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