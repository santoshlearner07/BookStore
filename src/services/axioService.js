import axios from "axios";

let baseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user/"

export const getBookApi = async () =>{
    let response = await axios.get(`${baseUrl}get/book`)
    return response;
}