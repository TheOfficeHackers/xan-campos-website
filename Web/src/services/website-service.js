import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

export function getWorksXanTrio() {
  return http.get("/worksXanTrio");
};

export function getWorksXan() {
  return http.get("/worksXan");
};

export function getConcerts() {
  return http.get("/concerts")
};

export function getColabos() {
  return http.get("/colabos")
};

export function getSideman() {
  return http.get("/sideman")
};

export function getVideos() {
  return http.get("/videos")
};

export function authenticate(data) {
  return http.post("/authenticate", data);
};

export function createMessage(message) {
  return http.post("/message", message)
};

export function createConcert(concert) {
  return http.post("/concerts", concert)
};

export function createColabo(colabo) {
  return http.post("/colabo", colabo)
};

export function createSideman(sideman) {
  return http.post("/sideman", sideman)
};