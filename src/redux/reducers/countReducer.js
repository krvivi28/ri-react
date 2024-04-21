import { incCount } from "../constants/constants";

const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, action) => {
  // console.log("in reducer",action)
  switch (action.type) {
    case incCount:
      // console.log("acttion", action);
      const us= { ...state, count: state.count + 1 };
      // console.log(state);
      return us;
    default:
      return { ...state };
  }
};
