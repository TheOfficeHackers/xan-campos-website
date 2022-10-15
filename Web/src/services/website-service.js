import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

export function getWorks() {
  return http.get("/works");
}

export function getConcerts() {
  return http.get("/concerts")
}

export function getColabos() {
  return http.get("/colabos")
}