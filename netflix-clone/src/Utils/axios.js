import axios from "axios";
const instance=axios.create({
    baseURL: "https://api.moviedb.org/3",
})
    export default instance