import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCart, postCart } from "../store/cart-async-actions";
import {
  fetchFavourites,
  postFavourites,
} from "../store/favourite-async-actions";
import { fetchRecent, postRecent } from "../store/recent-async-actions";
import useAuth from "../auth/useAuth";

const useUserData = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();
  // const userId = user.user_id;
  const userId = user.sub;

  const [isInitial, setIsInitial] = useState(true);

  const {
    changed: cartChanged,
    items: cart,
    totalQuantity: totalCartQuantity,
  } = useSelector((state) => state.cart);

  const { changed: favouriteChanged, favourites } = useSelector(
    (state) => state.favourite
  );

  const { changed: recentChanged, items: recentData } = useSelector(
    (state) => state.recent
  );

  useEffect(() => {
    dispatch(fetchCart(userId));
    dispatch(fetchFavourites(userId));
    dispatch(fetchRecent(userId));
  }, []);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }
    if (cartChanged) {
      dispatch(postCart({ user: userId, items: cart }));
    }
  }, [cart]);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }
    if (favouriteChanged) {
      dispatch(postFavourites({ user: userId, items: favourites }));
    }
  }, [favourites]);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }
    if (recentChanged)
      dispatch(postRecent({ user: userId, items: recentData }));
  }, [recentData]);

  return {
    totalCartQuantity,
    favouritesLength: favourites.foods.length + favourites.restaurants.length,
  };
};

export default useUserData;
