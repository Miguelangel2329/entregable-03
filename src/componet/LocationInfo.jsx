import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <div>
      <article>
        <h2>{location?.name}</h2>

        <ul class="select">
        <li><span>Type:   </span><span>{location?.type}</span></li>
        <li><span>Dimension:  </span><span>{location?.dimension || "desconocido"}</span></li>
        <li><span>Population:  </span><span>{location?.residents.length}</span></li>
        </ul>
      </article>
    </div>
  )
}

export default LocationInfo
