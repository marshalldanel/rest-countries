import axios from 'axios';
const base = `https://restcountries.eu/rest/v2`;

export async function getAllCountries() {
  try {
    const res = await axios.get(`${base}/all`);
    return res.data;
  } catch (error) {
    console.log('Api.js: error :>> ', error);
  }
}
