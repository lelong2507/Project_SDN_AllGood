import React, { Fragment } from "react";
import "./Header.css";
import Banner from "../BannerLine/Banner";
import { Link } from "react-router";
const Header = () => {
  return (
    <Fragment>
      <div className="app-header d-flex align-items-center justify-content-around">
        <Link to={"/"}>
          <img
            src="https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/small/logo_main_ddc98ef35b.png"
            alt="..."
          />
        </Link>
        <div className="wrapper-input-header">
          <div className="input-content">
            <input
              type="text"
              placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="wrapper-socail-header d-flex align-items-center justify-content-around gap-3">
          <button className="profile">
            <i className="fa-solid fa-user"></i>
          </button>
          <button className="cart">
            <div>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Giỏ Hàng</span>
            </div>
          </button>
        </div>
      </div>
      <Banner />
    </Fragment>
  );
};

export default Header;
