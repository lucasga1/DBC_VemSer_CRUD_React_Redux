import axios from "axios";

const apiDbc = axios.create({
    baseURL: "https://dbc-pessoa-api.herokuapp.com"
})

export default apiDbc;