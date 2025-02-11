import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="app-banner-line d-flex p-3">
      <div className="item-banner">
        <img src="https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/small/location_ae6d4783bf.png" />
        <span>Ở đây có điện máy giá SỐC</span>
      </div>
      <div className="item-banner">
        <img src="https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/soc_2f6cbf28ff.png" />
        <span>Xả kho giá sốc, số lượng có hạn!</span>
      </div>
      <div className="item-banner">
        <img src="https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/small/Icon_50_d68b462c30.png" />
        <span>Robot hút bụi - Giảm đến 50%</span>
      </div>
    </div>
  );
};

export default Banner;
