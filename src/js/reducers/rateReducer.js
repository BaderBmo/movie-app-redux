//rate reducer
import { FIND_TITLE } from "../constants/action-types";

const initialRate = {
    theRate:5
  };
  
  const rateReducer = (state = initialRate, action) =>{
    if (action.type === FIND_TITLE) {
      return Object.assign({}, state, { theRate: action.payload});
    }
    return state; }
  
  export default rateReducer;