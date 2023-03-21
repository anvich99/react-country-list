import React from 'react'
import { Country } from '../../types/types'
import { CountryItem } from '../CountryItem/CountryItem'
interface CountryListProps {
  contries: Country[],
}
export const CountryList = ({contries}:CountryListProps) => {
  return (
    <ul className="list-group">
      { contries.map((country) => <CountryItem info = {country}/>)}
    </ul>
  )
}
