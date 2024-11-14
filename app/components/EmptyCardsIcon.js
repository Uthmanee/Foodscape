import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Icon from "./Icons/Icon";

function EmptyCardsIcon({ style }) {
  return (
    <Icon
      style={style}
      color={colors.grey}
      IconComponent={SimpleLineIcons}
      name="credit-card"
      size={140}
    />
  );
}

export default EmptyCardsIcon;
