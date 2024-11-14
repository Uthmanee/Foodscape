import { useDispatch } from "react-redux";

import { favouriteActions } from "../store/favourite-slice";

export default useFavourites = () => {
  const dispatch = useDispatch();

  return (item) => {
    dispatch(favouriteActions.toggleFavourite(item));
  };
};

// call the returned function where needed. Then send the new favorites array to the backend

// if the backend request fails: remove the new item added to favorites form the store, notify the user of the error (I display a toast) The ui will react to the favorites removal by changing heart icon color
