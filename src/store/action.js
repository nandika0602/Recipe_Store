import {
  GET_API,
  IS_LOADING,
  ERROR,
  DETAIL_API,
  ADD_TO_CART,
  REMOVE_CART,
} from "./type";

const getApi = (res) => {
  return { type: GET_API, payload: res };
};
const isloading = (val) => {
  return { type: IS_LOADING, payload: val };
};
const error = (error) => {
  return { type: ERROR, payload: error };
};

// export const getApi = async () => {
// Error: Actions must be plain objects.
//Instead, the actual type was: 'Promise'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.
//See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.
//   const URL = "https://dummyjson.com/recipes";
//   const res = await fetch(URL);
//   console.log(res);
//   const ress = await res.json();
//   console.log(ress);
//   return { type: GET_API, payload: ress };
// };

export const getApiAction = () => {
  return async (dispatch) => {
    try {
      dispatch(isloading(true));
      const URL = "https://dummyjson.com/recipes";
      const res = await fetch(URL);
      const ress = await res.json();
      dispatch(isloading(false));
      dispatch(getApi(ress));
    } catch (err) {
      dispatch(isloading(false));
      dispatch(error(err.message));
    }
  };
};
const detailApi = (data) => {
  return { type: DETAIL_API, payload: data };
};
export const getDetailApiAction = (id) => {
  return async (dispatch) => {
    try {
      const URL = "https://dummyjson.com/recipes/" + id;
      const res = await fetch(URL);
      const ress = await res.json();
      dispatch(detailApi(ress));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addToCart = (list) => {
  // alert("Successfully added to cart");
  return { type: ADD_TO_CART, payload: list };
};

export const removeCart = (id) => {
  // console.log(id);
  return { type: REMOVE_CART, payload: id };
};
