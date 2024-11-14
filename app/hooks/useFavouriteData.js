import { useSelector } from "react-redux";

export default useFavouriteFoods = (id, data) => {
  const favouritedata = useSelector(
    (state) => state.favourite.favourites[data]
  );
  const favouriteFoodsIds = favouritedata.map((item) => item.id);
  const isFavourite = favouriteFoodsIds.includes(id);
  return isFavourite;
};
