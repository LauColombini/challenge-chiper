import axios from "axios";

const request = axios.create({
  baseURL: 'https://api.reddit.com/r/pics',
})

export default request;