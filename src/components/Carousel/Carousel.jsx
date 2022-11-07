import React from "react";
import "../Carousel/Carousel.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BookTicket from "../BookTicket/BookTicket";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carouselAction } from "../../redux/actions/QuanLyPhimActions";
export default function Carousel() {

  //! khai báo useSelector
  const { bannerArr } = useSelector(state => state.QuanLyPhimReducer)
  // console.log(bannerArr)

  //! khai báo useDispatch
  let dispatch = useDispatch();

  //! khao báo useEffect
  useEffect(() => {
    getAPI()
  }, []);

  let getAPI = () => {

    let action = carouselAction

    dispatch(action)

  }

  //! hàm render banner
  const renderBanner = () => {
    return bannerArr.map(banner => {
      return <div className="item" key={banner.maPhim}>
        <div className="item__img">
          <img
            className="img-fluid"
            src={banner.hinhAnh}
            alt="banner phim"
          />
          <div className="background__overlay">
            <i className="fa fa-play carousel__button" />
          </div>
        </div>
      </div>
    })
  }

  return (
    <div className="hotMovie">
      <div className="hotMovie__content">
        <OwlCarousel
          loop
          nav
          autoplay
          items={1}
          className="myHotMovieCarousel owl-carousel owl-theme"
        >
          {/* <div className="item">
            <div className="item__img">
              <img
                className="img-fluid"
                src="https://s3img.vcdn.vn/123phim/2020/07/yeu-nhau-mua-e-15949150603140.png"
                alt="phim soi"
              />
              <div className="background__overlay">
                <i className="fa fa-play carousel__button" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__img">
              <img
                className="img-fluid"
                src="https://s3img.vcdn.vn/123phim/2020/05/vi-anh-deo-tin-15906776637571.png"
                alt="hinh anh phim"
              />
              <div className="background__overlay">
                <i className="fa fa-play carousel__button" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__img">
              <img
                className="img-fluid"
                src="https://s3img.vcdn.vn/123phim/2020/07/ban-dao-15954792351353.jpg"
                alt="va phim cua hinh anh"
              />
              <div className="background__overlay">
                <i className="fa fa-play carousel__button" />
              </div>
            </div>
          </div> */}
          {renderBanner()}
        </OwlCarousel>
      </div>
      <BookTicket />
    </div>
  );
}
