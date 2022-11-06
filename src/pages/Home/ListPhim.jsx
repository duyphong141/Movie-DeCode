import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//slick carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MultipleRows from '../../components/ReactSlick/MultipleRowSlick';
import { danhSachPhimAction } from '../../redux/actions/quanLyPhimAction';

export default function ListPhim() {

    const { phimArray } = useSelector(state => state.quanLyPhimReducer)

     //! khai báo useDispatch
     let dispatch = useDispatch();

     //! khao báo useEffect
     useEffect(() => {
         getAPI()
     }, []);
 
     let getAPI = () => {
 
         let action = danhSachPhimAction;
 
         dispatch(action)
     }


    return (
        <section className="list-phim text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <MultipleRows phimArray={phimArray}/>
                </div>
            </div>
        </section>
    )
}
