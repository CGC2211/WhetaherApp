import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import converUnits from 'convert-units'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

const getCityCode = ( city, countryCode) => `${city}-${countryCode}` 

// rendercityand conutr se va a convertiur en una funcion que retorna otra funcion
const renderCityAndCountry =   eventOnClickCity   => (cityAndCountry, weather) => { 
	
		const { city, countryCode, country } = cityAndCountry;
		//const { temperature, state } = weather;

		return (
			<ListItem 
				button
				key={getCityCode(city, countryCode)} 
				onClick={() => eventOnClickCity(city,countryCode)}>
				<Grid 
					container={true}
					justify="center"
					alignItems="center">
					<Grid item
						md={9}
						xs={12}>
						<CityInfo city={city} country={country} />
					</Grid>
					<Grid item
						md={3}
						xs={12}>
						<Weather 
						temperature={ weather && weather.temperature} 
						state={weather && weather.state} />
					</Grid>
				</Grid>
			</ListItem>
		)
}

const CityList = ({ cities, onClickCity }) => {
	const [ allWeather, setAllWeather] = useState({})
	const [ error, setError] = useState(null)
	

	useEffect(() => {
		const setWeather = async (city, countryCode) => {
			const apiId = "22fa609832d495d926a89a4faefeff3e";
			const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiId}`;
			try {
				const response = await axios.get(url)
			
				const { data } = response;
				const temperature = Number(converUnits(data.main.temp).from("K").to("C").toFixed(0));
				const state = data.weather[0].main.toLowerCase();
				
				const propName = getCityCode(city, countryCode);
				const propValue = { temperature, state };
				
				setAllWeather(allWeather => ( { ...allWeather, [propName] : propValue } ));
			} catch (error) {
				if (error.response) { //Errores que nos responde el server
					const { data, status } = error.response
					console.log("data", data);
					console.log("status", status);
					setError("Ha ocurrido un error en el servidor del clima")
				} else if (error.request) { // Errores que suceden por no llegar al server
					setError("Verifique que tenga conexión a internet")
				} else { // Errores imprevistos
					setError("Error al cargar los datos")
				}
			}
		}

		cities.map(cityElement => setWeather(cityElement.city, cityElement.countryCode) );

	}, [cities])

	return (
       <div>
		   {
			   error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
		   }
		    <List>
				{
					cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
						allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode, cityAndCountry.country)]) )
				}
        	</List>
	   </div>
    )
}

CityList.propTypes = {
	cities: PropTypes.arrayOf(
		PropTypes.shape({
			city: PropTypes.string.isRequired,
			country: PropTypes.string.isRequired,
			countryCode: PropTypes.string.isRequired,
		})
	).isRequired,
	onClickCity: PropTypes.func.isRequired,
}



export default CityList
