import axios from "axios"
import cors from "cors"
// const baseurl = "https://extract-news.p.rapidapi.com/v0"
// const baseurl = "https://www.theverge.com/2020/4/17/21224728"
// const baseurl = 'https://extract-news.p.rapidapi.com'
// const baseurl = 'https://newsapi.org'
// const baseurl = "http://127.0.0.1:8000"
const baseurl = 'https://newsdata.io'


const http = axios.create({
    baseURL: baseurl,
    headers: {
        "origin": "*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Acess-Control-Allow-Origin": "origin-list",
        'X-RapidAPI-Key': 'pub_17399dceccdecc8c9a26ae850739895750c3a',
    }


})
cors(http)

export default http