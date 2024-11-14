import React from "react";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";
import Icon from "./Icons/Icon";

export default function EmptyFavouritesIcon({ style }) {
  return (
    <Icon
      style={style}
      color={colors.grey}
      IconComponent={AntDesign}
      name="hearto"
      size={140}
    />
  );
}
