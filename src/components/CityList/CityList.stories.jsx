import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Hermosillo", country: "México" },
    { city: "New York", country: "USA" },
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Distrito Federal", country: "México" },
    { city: "Lima", country: "Peru" },
]


export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en City")} />