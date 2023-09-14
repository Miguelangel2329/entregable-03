import React, { useEffect } from 'react'
import useFech from '../hooks/useFech'

const ResindentCard = ({url}) => {
    const [resident, setresident] = useFech(url)
    useEffect(() => {
      setresident()
    }, [])
    console.log(resident)
    
  return (
    <article class="columna">
        <div>
            <img src={resident?.image} alt="" />
            <div>
                <span></span>
                <span>{resident?.status}</span>
            </div>
        </div>
        <section>
            <h3>{resident?.name}</h3>
            <hr />
            <ul>
                <li><span>Specie: </span><span>{resident?.species}</span></li>
                <li><span>Origin: </span><span>{resident?.origin.name}</span></li>
                <li><span>Episodes where appear: </span><span>{resident?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}

export default ResindentCard
