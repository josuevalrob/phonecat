import {FETCH_PHONES, changeColor} from './types';

import axios from 'axios';

export function fetchPhones (){
console.log('fetching phones');
  return(dispatch) => {
    return axios.get("https://my-json-server.typicode.com/josuevalrob/phonecat/phones")
      .then((phones)=> dispatch ({
        type: FETCH_PHONES,
        payload: phones
      }))
  }
}

export function loadColor (){
console.log('fetching');
  return(dispatch) => {
    return axios.get("http://www.colr.org/json/color/random")
      .then((response)=>{
        dispatch(changeColor("#"+response.data.new_color))//We need to tell it what to return. everything: response.data
      })
  }
}
