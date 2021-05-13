import axios from "axios";

const xhr = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
});

export async function getCountries() {
  const req = await xhr.get("all");
  return req.data;
}
