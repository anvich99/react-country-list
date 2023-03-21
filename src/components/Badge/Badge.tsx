import React from 'react'
type BadgeLabel = 'area' | 'population';
type BadgeColor = 'primary'| 'secondary';
interface BadgeProps{
  color: BadgeColor,
  text: BadgeLabel,
  value: number
}
export const Badge = ({color, text, value }:BadgeProps) => {
  return (
    <button type="button" className={`btn btn-${color} fs-4`}>{text}
      <span className ="badge fs-4">{value}</span>
  </button>
  )
}
