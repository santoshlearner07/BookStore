import axios from "axios";

let configObjForaddNotes1 = {
    headers: {
      
      "x-access-token": localStorage.getItem("token")
    },
  }

export const registration = async(data)=>{
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",data)
    return response;
}


export const uLogin = async(data)=>{
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",data)
    return response;
}


