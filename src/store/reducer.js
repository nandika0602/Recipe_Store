import {
  GET_API,
  IS_LOADING,
  ERROR,
  DETAIL_API,
  ADD_TO_CART,
  REMOVE_CART,
} from "./type";

const initialState = {
  isLoading: false,
  // getData: {
  //   success: false,
  //   progress: false,
  //   fail: false,
  //   data: []
  // },
  data: [],
  error: "",
  detail: [],
  cartItems: [],
  notify: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_API) {
    return { ...state, data: action.payload.recipes };
  }

  if (action.type === IS_LOADING) {
    return { ...state, isLoading: action.payload };
  }

  if (action.type === ERROR) {
    return { ...state, error: action.payload };
  }

  if (action.type === DETAIL_API) {
    return { ...state, detail: action.payload };
  }

  if (action.type === ADD_TO_CART) {
    const duplicateItem = state.cartItems?.filter(
      (item) => JSON.stringify(item) === JSON.stringify(action.payload)
    );
    if (duplicateItem.length) {
      alert("This recipe already added to cart!!");
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        notify: true,
      };
    }
  }

  if (action.type === REMOVE_CART) {
    const removedItem = state.cartItems.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, cartItems: removedItem };
  }

  return state;
};

export default reducer;
