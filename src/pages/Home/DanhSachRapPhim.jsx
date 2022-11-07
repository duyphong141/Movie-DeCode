import React, { Fragment, useEffect } from 'react';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { danhSachHeThongRapAction, quanLyRapAction } from '../../redux/actions/quanLyRapAction';
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';


export default function DanhSachRapPhim() {

    const { heThongRapChieu } = useSelector(state => state.quanLyRapReducer)

    //! khai báo useDispatch
    let dispatch = useDispatch();

    //! khao báo useEffect
    useEffect(() => {
        getAPI()
    }, []);

    let getAPI = () => {

        let action = danhSachHeThongRapAction;

        dispatch(action)

    }


    return (
        <Tabs
            tabPosition='left'
            items={heThongRapChieu.map(heThongRap => {
                return {
                    label: <div className='logo_rap'><img src={heThongRap.logo} className='rounded-full' alt="rạp phim" width={50} /></div>,
                    key: `${heThongRap.maHeThongRap}`,


                    children: <Tabs className='ahihi'
                        tabPosition='left'
                        items={heThongRap.lstCumRap.map(Rap => {
                            return {
                                label: <div className='tenrap'><h4>{Rap.tenCumRap}</h4> <h6 className='diachi'>Địa chỉ: {Rap.diaChi}</h6></div>,
                                key: `${Rap.maCumRap}`,


                                children: Rap.danhSachPhim.map(phim => {
                                    return <Fragment key={phim.maPhim} >
                                        <div className="item_phim" style={{ display: "flex", padding:"20px" }}>
                                            <div className='img_phim'>
                                                <img style={{}} src={phim.hinhAnh} alt={phim.tenPhim} />
                                            </div>
                                            <div className='giochieu'>
                                                <h2>{phim.tenPhim}</h2>

                                                <div className='grid grid-cols-2' style={{width: '380'}}>
                                                    {/* slice chỉ hiện 5 khung giờ  */}
                                                    {phim.lstLichChieuTheoPhim?.slice(0,5).map((lichChieu, index) => {
                                                        return <a key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('DD.MM.YYYY - HH:MM')}
                                                        </a>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <hr />

                                    </Fragment>
                                })
                            }
                        })}
                    />
                }
            })}
        />
    );
};



