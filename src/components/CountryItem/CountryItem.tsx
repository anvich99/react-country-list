import React from 'react'
import { Country } from '../../types/types'
import { Badge } from '../Badge/Badge'
interface CountryItemProps {
  info: Country,
}
export const CountryItem = ({info}: CountryItemProps) => {
  return (
    <li className ="list-group-item d-flex justify-content-between align-items-center">
      <img  className = "w-25" src={info.flag} alt="flag" />
      <p className ="text-start fs-3">{info.name}</p>
      <p className ="text-start fs-3">{info.capital}</p>
      <p className ="text-start fs-3">{info.region}</p>
      <Badge text = 'area' color = 'primary' value = {info.area} />
      <Badge text = 'population' color = 'secondary' value = {info.population}/>
    </li>
  )
}
