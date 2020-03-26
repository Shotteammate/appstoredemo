import React from "react";
import ListItem from "./ListItem";

const AppListing = ({ appList }) => {
  let order = 0;
  const list = appList.map(listItem => {
    order = order + 1;
    return <ListItem key={listItem.id} listItem={listItem} order={order} />;
  });

  return <>{list}</>;
};

export default AppListing;
