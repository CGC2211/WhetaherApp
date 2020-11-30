import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'

const cities = [
    { city: "Hermosillo", country: "México" },
    { city: "New York", country: "USA" },
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Distrito Federal", country: "México" },
    { city: "Lima", country: "Peru" },
]

const MainPage = () => {
	const history = useHistory()
	const onClickHandler = () => {
		// history.push permite cambiar la urle de manera 
		history.push('/city')
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
