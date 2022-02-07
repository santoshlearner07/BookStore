import axios from "axios";

let baseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user/"

let configObjForaddNotes1 = {
    headers: {
      
      "x-access-token": localStorage.getItem("token")
      
    },
  }


export const getBookApi = async () =>{
    let response = await axios.get(`${baseUrl}get/book`)
    return response;
}