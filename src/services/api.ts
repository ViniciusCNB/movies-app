import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "6dd66a3b27a45cfd9a6c27f649c33837",
    language: "pt-BR",
    include_adult: true 
  }
})