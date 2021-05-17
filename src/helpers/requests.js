import axios from "axios";

const xhr = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
});

export async function getCountries() {
  const req = await xhr.get("all");
  return req.data;
}

export async function getPlanets({ queryKey: [, page = 0] }) {
  let url = `https://swapi.dev/api/planets/`;
  if (page > 0) url += "?page=" + page;
  const req = await axios.get(url);
  return req?.data?.results;
}
