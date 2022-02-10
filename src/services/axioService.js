import axios from "axios";

let baseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user/"

let headerConfig = {
    headers: {
      
      "x-access-token": localStorage.getItem("token")
      
    }
  }


export const getBookApi = async () =>{
    let response = await axios.get(`${baseUrl}get/book`)
    return response;
}

export const addToCartApi = async (data) =>{
  let response = await axios.post(`${baseUrl}add_cart_item/${data}`,data,headerConfig)
  return response;
}

export const getCartItemApi = async () =>{
  let response = await axios.get(`${baseUrl}get_cart_items`,headerConfig)
  return response;
}

export const cartItemQuantity = async (id,data) =>{
  let response = await axios.put(`${baseUrl}cart_item_quantity/${id}`,data,headerConfig)
  return response;
}

export const addWishListApi = async(data)=>{
  let response = await axios.post(`${baseUrl}add_wish_list/${data}`,data,headerConfig)
  return response;
}

export const getWishListApi = async()=>{
  let response = await axios.get(`${baseUrl}get_wishlist_items`,headerConfig)
  return response;
}

export const removeCartItemApi = async(id)=>{
  let response = await axios.delete(`${baseUrl}remove_cart_item/${id}`)
  return response;
}

export const deleteBookApi = async(id)=>{
  let response  = await axios.delete(`${baseUrl}remove_wishlist_item/${id}`,headerConfig)
  return response;
}

export const editCustomerDetailsApi = async(data)=>{
  let response = await axios.put(`${baseUrl}edit_user`,data,headerConfig)
  return response;
}
