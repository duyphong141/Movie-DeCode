import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { datVeAction, layChiTietPhongVeAction } from '../../redux/actions/quanLyDatVeAction';
import { CloseOutlined } from '@ant-design/icons'
import { DAT_VE } from '../../redux/types/quanLyDatVeType';
import { ACCESS_TOKEN } from '../../util/setting';

export default function TicketBook(props) {

    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.quanLyDatVeReducer)

    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

    //! khai báo useDispatch
    let dispatch = useDispatch();

    //! khao báo useEffect
    useEffect(() => {
        getAPI()
    }, []);

    let getAPI = () => {
        // lấy param sản phẩm trên url 
        let { id } = props.match.params
        let action = layChiTietPhongVeAction(id);
        dispatch(action)
    }


    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return <Redirect to="/login" />
    }

    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === 'true' ? 'gheDaDat' : '';
            // kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
            let classGheDangDat = '';
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD =>
                gheDD.maGhe === ghe.maGhe);
            if (indexGheDD !== -1) {
                classGheDangDat = 'gheDangDat';
            }

            return <Fragment key={index}>
                <button disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`} onClick={() => {
                    let action = {
                        type: DAT_VE,
                        gheDuocChon: ghe
                    }
                    dispatch(action);
                }}>
                    {ghe.daDat ? <CloseOutlined /> : ghe.stt}
                </button>
            </Fragment>
        })
    }

    return (
        <div className='container my-4'>
            <div className="grid grid-cols-12">

                <div className="col-span-8">
                    <h2 className='text-center'>TRANG ĐẶT VÉ</h2>
                    <div className="screen"></div>
                    {renderGhe()}
                </div>

                <div className="ticket_detail col-span-4 my-auto">

                    <div className="chuthich">
                        <div className="ct-ghe">
                            <span className='mr-2'>Ghế thường:</span>
                            <button className='ghe m-0'></button>
                        </div>
                        <div className="ct-ghe">
                            <span className='mr-2'>Ghế VIP:</span>
                            <button className='ghe gheVip m-0'></button>
                        </div>
                        <div className="ct-ghe">
                            <span className='mr-2'>Ghế đang đặt:</span>
                            <button className='ghe gheDangDat m-0'></button>
                        </div>
                        <div className="ct-ghe">
                            <span className='mr-2'>Ghế đã đặt:</span>
                            <button className='ghe gheDaDat m-0'><CloseOutlined /></button>
                        </div>
                    </div>

                    <div className="thanhtoan">
                        <div className="total">
                            <p>
                                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe;
                                }, 0).toLocaleString()} VND
                            </p>
                        </div>
                        <hr />
                        <div className="cumrap">
                            <h3 className='info'>Cụm rạp</h3>
                            <h3 className='value'>{thongTinPhim?.tenCumRap}</h3>
                        </div>
                        <hr />
                        <div className="diachi">
                            <h3 className='info'>Địa chỉ</h3>
                            <h3 className='value'>{thongTinPhim?.diaChi}</h3>
                        </div>
                        <hr />
                        <div className="rap">
                            <h3 className='info'>Rạp</h3>
                            <h3 className='value'>{thongTinPhim?.tenRap}</h3>
                        </div>
                        <hr />
                        <div className="giochieu">
                            <h3 className='info'>Ngày giờ chiếu:</h3>
                            <h3 className='value'>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</h3>
                        </div>
                        <hr />
                        <div className="tenphim">
                            <h3 className='info'>Tên phim</h3>
                            <h3 className='value'>{thongTinPhim?.tenPhim}</h3>
                        </div>
                        <hr />
                        <div className="chonghe">
                            <h3 className='info'>Chọn ghế:</h3>
                            <div className="">
                                {danhSachGheDangDat.map((gheDD, index) => {
                                    return <span key={index}>
                                        {gheDD.stt}
                                    </span>
                                })}
                            </div>
                        </div>
                        <hr />
                        <button onClick={() => {
                            let thongTinDatVe = {
                                maLichChieu: props.match.params.id,
                                danhSachVe: danhSachGheDangDat
                            }
                            console.log(thongTinDatVe)
                            console.log(JSON.parse(localStorage.getItem(ACCESS_TOKEN)))
                            let action = datVeAction(thongTinDatVe)
                            dispatch(action)
                        }} className='btn-datve'>ĐẶT VÉ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
