import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5002/api"
});

export const fetchMines = () => API.get("/geo/mines");
export const fetchNoGo = () => API.get("/geo/nogo");
export const fetchViolations = () => API.get("/analysis/violations");
export const fetchExcavation = () => API.get("/analysis/excavation");
export const fetchTimeSeries = () => API.get("/analysis/timeseries");