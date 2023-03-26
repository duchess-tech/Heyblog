import axios from "axios"
import cors from "cors"
cors()


const baseurl = "http://localhost:9090/"
const http2 = axios.create({
    baseurl: baseurl

})
export default http2
