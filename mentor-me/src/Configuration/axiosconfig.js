import axios from 'axios';

const api = axios.create({ baseURL: "https://bw-unit4-mentor-me.herokuapp.com/api" })
if (localStorage.getItem("token")) {
    api.defaults.headers.common["authorization"] = localStorage.getItem("token")
}

export default api;