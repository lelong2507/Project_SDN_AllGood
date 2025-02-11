import React from "react";
import "./ChildBanner.css";

const ChildBanner = () => {
  return (
    <div id="childCarousel" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active d-flex align-item-center justify-content-center gap-3">
          <img
            style={{
              width: "590px",
              height: "210px",
              margin: "0 auto",
              borderRadius: "20px",
            }}
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_98367d336b.png"
            alt="..."
          />
          <img
            style={{
              width: "590px",
              height: "210px",
              margin: "0 auto",
              borderRadius: "20px",
            }}
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_01f767bd39.png"
            alt="..."
          />
        </div>
        <div className="carousel-item d-flex align-item-center justify-content-center gap-3">
          <img
            style={{
              width: "590px",
              height: "210px",
              margin: "0 auto",
              borderRadius: "20px",
            }}
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_5108a00a96.png"
            alt="..."
          />
          <img
            style={{
              width: "590px",
              height: "210px",
              margin: "0 auto",
              borderRadius: "20px",
            }}
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_612x212_b1089e915d.png"
            alt="..."
          />
        </div>
        <div className="carousel-item d-flex align-item-center justify-content-center gap-3">
          <img
            style={{
              width: "590px",
              height: "210px",
              margin: "0 auto",
              borderRadius: "20px",
            }}
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_01f767bd39.png"
            alt="..."
          />
          <img
            style={{
              width: "590px",
              height: "210px",
              margin: "0 auto",
              borderRadius: "20px",
            }}
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_8211be63a9.png"
            alt="..."
          />
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          top: "-300px",
          left: "-25px",
        }}
        className="carousel-control-prev"
        type="button"
        data-bs-target="#childCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        style={{
          position: "absolute",
          top: "-300px",
          right: "-25px",
        }}
        className="carousel-control-next"
        type="button"
        data-bs-target="#childCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ChildBanner;
