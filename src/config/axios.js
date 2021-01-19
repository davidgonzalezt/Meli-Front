import axios from "axios";

const clienteAxios = axios.create({
    baseURL: "https://meli-servidor.herokuapp.com/"
});

export default clienteAxios;