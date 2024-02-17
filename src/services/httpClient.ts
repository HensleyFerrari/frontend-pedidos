import axios from "axios";

export const httpCliente = axios.create({
    baseURL: "http://localhost:3000"
})