import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFech from './hooks/useFech'
import getRandonNumber from './utils/getRandonNumber'
import LocationInfo from './componet/LocationInfo'
import ResindentCard from './componet/ResindentCard'

function App() {
  const [inputValue, setinputValue] = useState(getRandonNumber(126))
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, setlocation, hasError] = useFech(url)
  useEffect(() => {
    setlocation()
  }, [inputValue])

//console.log(location)

const inputsearch = useRef()

const handelSumit = (event) =>{
  event.preventDefault()
  setinputValue(inputsearch.current.value.trim())
}
  

  return (
    <>
      <div>
        <img src="/Untitled.png" alt="" class="imagen"/>
      </div> <br />
      <form onSubmit={handelSumit}>
        <input ref={inputsearch} type="text" />
        <button>Search</button>
      </form>
      {
        hasError
          ? <h2> ❌hey inserte un numero de 1 a 126 😒</h2>
          : (
            <>
              <div>
                 <LocationInfo location = {location}/>
                 <div class='contenedor'>
                   {
                     location?.residents.map(url => (
                       <ResindentCard key={url} url={url}/>
                     ))
                   }
                 </div>
               </div>
            </>
          )
       }

    </>
  )
}

export default App
