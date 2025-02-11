import React, { Fragment } from "react";
import "./Banner.css";
import ChildBanner from "./ChildBanner/ChildBanner";

const Banner = () => {
  return (
    <Fragment>
      {/* Main - Banner */}
      <div className="main-banner">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                position: "relative",
                backgroundImage:
                  "url('https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_bg_2_fc50affb12.png')",
                height: "700px",
              }}
            >
              <img
                src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_c706c7740a.png"
                alt="..."
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  maxHeight: "400px",
                  maxWidth: "80%",
                }}
              />
            </div>
            <div
              className="carousel-item"
              style={{
                position: "relative",
                backgroundImage:
                  "url('https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_bg_f40c131d23.png')",
                height: "700px",
              }}
            >
              <img
                src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_cc95bfe898.png"
                alt="..."
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  maxHeight: "400px",
                  maxWidth: "80%",
                }}
              />
            </div>
            <div
              className="carousel-item"
              style={{
                position: "relative",
                backgroundImage:
                  "url('https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_bg_507b09b8ef.png')",
                height: "800px",
              }}
            >
              <img
                src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_0f69e3f2f9.png"
                alt="..."
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  maxHeight: "400px",
                  maxWidth: "80%",
                }}
              />
            </div>
          </div>
          <button
            style={{
              position: "absolute",
              top: "200px",
              left: "-30px",
              transform: "translateY(-50%)",
              zIndex: 4,
            }}
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            style={{
              position: "absolute",
              top: "200px",
              right: "-30px",
              transform: "translateY(-50%)",
              zIndex: 4,
            }}
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Child - Banner */}
      <div className="child-banner-container">
        <ChildBanner />
      </div>
      <div className="type-product">

      </div>
    </Fragment>
  );
};

export default Banner;
