// define un estado
import { FETCH_PHONES } from '../actions/types';

const defaultState = {
  color:"red",
  // traemos los diferentes telefonos dentro de un arreglo
  items: []
}
// dependiendo del tipo de acción, cambia el estado.
const mainReducer=(state=defaultState,action)=>{

  switch (action.type) {
    case "CHANGE_COLOR":
      console.log('Changing color');
      return {
        ...state,
        color: action.color
      }
    case FETCH_PHONES:
      console.log('fetching phones');
      return {
        ...state,
        items: action.payload
      }
    default:
        return state;
  }
}

export default mainReducer;
