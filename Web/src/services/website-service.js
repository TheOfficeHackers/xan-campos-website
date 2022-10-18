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

export function getVideos() {
  return http.get("/videos")
};

export function createMessage(message) {
  return http.post("/message", message)
}