import React from 'react'
import { Country } from '../../types/types'
import { Badge } from '../Badge/Badge'
interface CountryItemProps {
  infoCountry: Country,
}
export const CountryItem = ({infoCountry}: CountryItemProps) => {
  return (
    <li className ="list-group-item d-flex justify-content-between align-items-center">
      <img  className = "w-25" src={infoCountry.flag} alt="flag" />
      <p className ="text-start fs-3">{infoCountry.name}</p>
      <p className ="text-start fs-3">{infoCountry.capital}</p>
      <p className ="text-start fs-3">{infoCountry.region}</p>
      <Badge text = 'area' color = 'primary' value = {infoCountry.area} />
      <Badge text = 'population' color = 'secondary' value = {infoCountry.population}/>
    </li>
  )
}
