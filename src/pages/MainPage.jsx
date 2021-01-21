import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'

const cities = [
    { city: "Hermosillo", country: "México", countryCode : "MX" },
    { city: "New York", country: "USA", countryCode : "US" },
    { city: "Buenos Aires", country: "Argentina", countryCode : "Ar" },
    { city: "Distrito Federal", country: "México", countryCode : "MX" },
    { city: "Lima", country: "Peru", countryCode : "PE" },
]

const MainPage = () => {
	const history = useHistory()

	const onClickHandler = (city,countryCode) => {
		// history.push permite cambiar la urle de manera 
		history.push(`/city/${countryCode}/${city}`)
		console.log(`City: ${city}
					CountryCode: ${countryCode}`)
	}

	return (
		<AppFrame>
			<Paper elevation={3}>
				<CityList 
					cities={cities} 
					onClickCity={onClickHandler} />		
			</Paper>	
		</AppFrame>
	)
}

export default MainPage
