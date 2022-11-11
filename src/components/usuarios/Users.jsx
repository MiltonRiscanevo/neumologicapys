import React from 'react'
import axios from "axios"

const BASE_URL = `http://localhost:8009`;
const RESOURCE = '/users';


const Users = () => {
  const dataUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${RESOURCE}`, { headers: {
        authorization: localStorage.getItem("access_token")
      },
      
    });
      console.log(response.data);
      return response;
    } catch(e) {
      throw e;
    }
  }
  

  dataUser()

    
  return (
    <div></div>
  )
}

export default Users