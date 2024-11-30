import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

// // code borrowed from solutions doesn't actually work, not entirely sure why
// const useCountry = (name) => {
//   const [country, setCountry] = useState(null)

//   useEffect(() => { // where did this url come from? not provided, just in solution
//     const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`
//     if (name.length>0) {
//       console.log(url)
//       axios.get(url).then(result => {
//         setCountry(result.data[0])
//       }).catch(() => {
//         setCountry(null)
//       })
//     }
//   }, [name])

//   return country
// }

// // solution differed here too from provided starting point
// const Country = ({ country }) => {
//   if (!country) {
//     return <div>not found...</div>
//   }

//   return (
//     <div>
//       <h3>{country.name.common}</h3>
//       <div>population {country.population}</div> 
//       <div>capital {country.capital}</div>
//       <img src={country.flags.png} height='100' alt={`flag of ${country.name.common}`}/> 
//     </div>
//   )  
// }

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App