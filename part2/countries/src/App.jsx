import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import List from "./components/List"
import Country from "./components/Country"
import countryService from './services/countries'
import './index.css'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(response => {
        setCountries(response)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountries = countries.length ? countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())) : [];

  return (
    <div>
      <Filter value={filter} onChange={handleFilterChange} />
      {filter.length > 0 && filteredCountries.length !== 1 && <List countries={filteredCountries} setFilter={setFilter} />}
      {filteredCountries.length === 1 && <Country country={filteredCountries[0]} />}
    </div>
  )
}
 export default App;