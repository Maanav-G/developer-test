import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        wishList: [...state.wishList],
      };
    case DELETE_ITEM:
      return {
        wishList: [...state.wishList],
      };
    default:
      return {
        wishList: ["1", "2", "3", "4"],
      };
  }
};

export default reducer;