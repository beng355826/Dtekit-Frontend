import axios from "axios"


const url = 'https://dtek.onrender.com/api'

export const postLogin = (em, pass) => {
console.log(em,pass);
    return axios.post(`${url}/users/login`,{
        "email": em,
        "password": pass
    })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return response.data
    });

}

export const getAllPhotos = () => {
  
      return axios.get(`${url}/pics?p=1`)
      .then(function (response) {
        return response.data
      })
      .catch(function (response) {
        return response.data
      });
  
  }




