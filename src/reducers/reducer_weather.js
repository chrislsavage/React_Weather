import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state];
    // this is the same as return state.concat([action.payload.data]); in ES6
  }

  return state
}

//never manipulate state directly...you want to return a new piece of data entirely
// so you don't want to push into the state array.
