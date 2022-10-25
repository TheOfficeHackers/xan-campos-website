import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

export function getProfile() {
  return http.get("/profile");
} 

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
  colabo.cover = colabo.cover[0]
  const data = new FormData()
  
  Object.keys(colabo).forEach(key => {
    data.append(key, colabo[key])
  })

  return http.post("/colabos", data)
};

export function createSideman(sideman) {
  sideman.cover = sideman.cover[0]
  const data = new FormData()
  
  Object.keys(sideman).forEach(key => {
    data.append(key, sideman[key])
  })

  return http.post("/sideman", sideman)
};

export function getEasterEggs() {
  return http.get("/easter-egg")
};