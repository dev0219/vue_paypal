import axios from "axios";

const instance = axios.create({
    baseURL : process.env.VUE_APP_API_BASE_URL,
});

const apiToken = localStorage.getItem("apiToken");

if (apiToken)
{
    instance.defaults.headers.Authorization = `Bearer ${apiToken}`;
}

export default instance;