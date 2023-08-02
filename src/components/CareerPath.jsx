import React from 'react'
import { Link } from 'react-router-dom'
import Android from './careerPath/Android'

export default function CareerPath() {
  return (
    <div>
      <h1>CareerPath</h1>
      <Link to="/careerpath/careerpathname" elememnt={<Android/>}>Android</Link>
    </div>
  )
}
