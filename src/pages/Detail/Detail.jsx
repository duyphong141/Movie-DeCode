import React, { Fragment, useEffect } from 'react'
import Header from '../../components/Header'

import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhimAction } from '../../redux/actions/quanLyRapAction'
import moment from 'moment'
import { Tabs } from 'antd'
import { NavLink } from 'react-router-dom'

export default function Detail(props) {

    const { phimDetail } = useSelector(state => state.quanLyPhimReducer)
    // console.log(phimDetail)
    //! khai báo useDispatch
    let dispatch = useDispatch();

    //! khao báo useEffect
    useEffect(() => {
        getAPI()
    }, []);

    let getAPI = () => {
        // lấy param sản phẩm trên url 
        let { id } = props.match.params
        let action = layChiTietPhimAction(id);

        dispatch(action)
    }

    return <Fragment>
        <Header />
        <div style={{ backgroundImage: `url(${phimDetail.hinhAnh})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <CustomCard
                style={{ paddingTop: 64, minHeight: '100vh' }}
                effectColor="#C780FF" // required
                color="#14AEFF" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className="grid grid-cols-12 my-5">
                    <div className="col-span-4 col-start-3">
                        <div className="grid grid-cols-2">
                            <img src={phimDetail.hinhAnh} alt="" />
                            <div className='text-white'>
                                <p>Ngày khởi chiếu: {moment(phimDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                                <h3>
                                    {phimDetail.tenPhim}
                                </h3>
                                <p>Nội dung: {phimDetail.moTa}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* phân hiển thị rạp, thời gian chiếu phim, (heThongRapChieu? có dấu ? vì load lần đầu chưa get API nên mảng bị rỗng nên .map báo lỗi)  */}
                <div className="container danhsach_rap">
                    <Tabs
                        className='bg-white'
                        tabPosition='left'
                        items={phimDetail.heThongRapChieu?.map(rapChieu => {
                            return {
                                label: <div className='logo_rap'><img src={rapChieu.logo} className='rounded-full' alt="rạp phim" width={50} /></div>,
                                key: `${rapChieu.maHeThongRap}`,



                                children: rapChieu.cumRapChieu?.map(rap => {
                                    return <div key={rap.maCumRap} style={{padding:"20px"}}>

                                        <h4 className="" style={{color:"#108f3e"}}>Rạp: {rap.tenCumRap}</h4>
                                        <p className="mb-4" >Địa chỉ: {rap.diaChi}</p>

                                        <div className='giochieu_chitiet grid grid-cols-6'>
                                            {rap.lichChieuPhim.map(lichChieu => {
                                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={lichChieu.maLichChieu}>{moment(lichChieu.ngayChieuGioChieu).format('DD.MM.YYYY - HH:MM')}</NavLink>
                                            })}
                                        </div>
                                    </div>
                                })
                            }
                        })}
                    />
                </div>
            </CustomCard>
        </div>
    </Fragment>


}

