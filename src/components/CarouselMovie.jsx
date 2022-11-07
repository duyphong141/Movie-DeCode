import React, { useEffect } from 'react'
// import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { carouselAction } from '../redux/actions/carouselAction';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';


export default function CarouselMovie() {

    //! khai báo useSelector
    const { bannerArr } = useSelector(state => state.carouselReducer)
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

    const contentStyle = {

        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 'auto'
    };

    // hàm render banner
    const renderBanner = () => {
        return bannerArr.map(banner => {
            return <Carousel.Item interval={4000} key={banner.maPhim}>
                <img
                    className="d-block" style={contentStyle}
                    src={banner.hinhAnh}
                    alt="Hình c"
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        })
    }

    return (
        <div className="bg-[url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg_c_bricks.png')]">
            <Carousel className='pt-16 w-4/6 mx-auto'>
                {renderBanner()}
            </Carousel>
        </div>
    );
};



