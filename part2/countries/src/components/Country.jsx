import Weather from "./Weather";

const Country = ({country}) => {
  const languageKeyArray = country.languages ? Object.keys(country.languages) : [];
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital: {country.capital}</div>
      <div>Area: {country.area}</div>
      <h2>Languages</h2>
      <ul>
        {languageKeyArray.map(languageKey => <li key={languageKey}>{country.languages[languageKey]}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} className="flagImg" />
      <Weather name={country.capital} lat={country.latlng[0]} lng={country.latlng[1]} />
    </div>
  )
}

export default Country;