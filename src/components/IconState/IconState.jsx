import React from 'react'
//import PropTypes from 'prop-types'
import { WiDayCloudy, 
	WiDayFog,
	WiDaySunny, 
	WiRain,
	WiSnow,
	WiRaindrop,
	WiThunderstorm } from 'react-icons/wi'

export const validValues = [
	"clouds",
	"fog",
	"clear",
	"rain",
	"snow",
	"drizzle",
	"thunderstorm"
]

const stateByName = {
	clouds: WiDayCloudy,
	fog: 	WiDayFog,
	clear: 	WiDaySunny,
	rain: 	WiRain,
	snow: 	WiSnow,
	drizzle: WiRaindrop,
	thunderstorm:	WiThunderstorm

}


const IconState = ({ state }) => {
	let StateByName = stateByName[state]
	return (
		<StateByName />
	)
}
/*
IconState.propTypes = {

}*/

export default IconState
