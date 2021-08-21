import {animateActionsTypes} from './actions';

const initialState = {
  startAnimation: false
}

export const animateReducer = (state = initialState, action) => {
  switch (action.type) {
    case animateActionsTypes.SET_START_ANIMATE:
      return {
        ...state,
        startAnimate: action.payload
      }
    default:
      return state;
  }
}