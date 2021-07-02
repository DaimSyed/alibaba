import React, { useState } from "react";
import SHOP_DATA from "./ShopData";
import "./ShopPage.styles.scss";
import CollectionPreview from "../../component/collectionPreview/CollectionPreview";

const ShopPage = () => {
  const [data] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {data.map(({ id, ...others }) => (
        <CollectionPreview key={id} {...others} />
      ))}
    </div>
  );
};

export default ShopPage;
