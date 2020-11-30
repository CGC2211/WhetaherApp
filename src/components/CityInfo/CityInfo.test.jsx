import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' //SUT Subject Under Testing ( objeto del testeo)

test("CityInfo Render", async () => {
	/// AAA
	// Arrange
	// Act
	const city = "Hermosillo";
	const country = "Mexico"
	
	//Render: renderiza el componente y retorna una serie de funciones de utilidad
	// En este casi utilizamos "findAllByRole" para "consultar" a nuestro componente
	// Analizaremos el estado en el "Assert"
	const { findAllByRole } = render(<CityInfo city={city} country={country}/>)
	
	// Assert
	// findAllByRole nos va a buscar (en este caso) todos los componentes que sean
	// "heading" =>? h1,h2,h3 ...etc
	// El resultado es una raiz de componentes
	const cityAndCountryComponents = await findAllByRole("heading")

	// ¿Cuando el test va a ser correct?
	// Definición:
	// Cuando en el primer elemento (heading) se encuentre la ciudad "Hermosillo"
	// y cuando en el segundo elemento se encuentre el pais Mexico

	expect (cityAndCountryComponents[0]).toHaveTextContent(city);
	expect (cityAndCountryComponents[1]).toHaveTextContent(country);

	// Si estas condiciones se cumplen (expect), el test esta "ok"
});