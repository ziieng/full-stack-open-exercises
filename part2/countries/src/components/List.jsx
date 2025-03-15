const List = ({countries, setFilter}) => {
  if (countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  }
  if (countries.length > 1) {
    return (
      <ul>
        {countries.map(country => 
          <li key={country.name.common}>
            {country.name.common} <button onClick={() => setFilter(country.name.common)}>show</button>
          </li>
        )}
      </ul>
    )
  }
  return null
}

export default List;