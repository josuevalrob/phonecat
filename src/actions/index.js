import axios from 'axios';
import {FETCH_PHONES} from './types';

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

export function changeColor (color){
// This will help our reducers.
   return {
    type:"CHANGE_COLOR",
    color:color
  }
}
