import { useState, useEffect } from 'react';
import { getAllCountries } from '../api';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAllCountries = async () => {
      const res = await getAllCountries();
      setCountries(res);
    };
    fetchAllCountries();
  }, []);

  return (
    <>
      <div>
        {countries.map((country) => (
          <p key={country.name}>{country.name}</p>
        ))}
      </div>
    </>
  );
}

export default App;
