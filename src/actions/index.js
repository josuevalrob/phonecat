import axios from 'axios';

export function loadColor (){
// dispatch is returning something
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
