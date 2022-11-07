import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

export default function Phim(props) {

    const { phim } = props;
    // console.log(props)

    return (
        <Fragment>
            <div className="cardphim m-2 text-center ">
                <div className='img-phim rounded-lg' style={{ background: `url(${phim.hinhAnh})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <img className='opacity-0 w-full' style={{ height: "340px" }} src={phim.hinhAnh} alt={phim.tenPhim} />

                    {/* thử thêm lớp overlay */}
                    <div className="cardphim-overlay">
                        {/* nút video  */}
                        <div className="video_button">
                            <a href="#">
                                <i className="fa fa-play"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <h1 className="tenphim title-font sm:text-2xl text-xl font-medium text-gray-900 mt-2 mb-3 h-16">{phim.tenPhim}</h1>
                {/* bấm đặt vé link qua trang chi tiết bằng id  */}
                <NavLink to={`/detail/${phim.maPhim}`} className="datve inline-flex items-center " href=''>Đặt vé</NavLink>

            </div>


        </Fragment>
    )
}
