import axios from "axios";
import { history } from "../../App";
import { ACCESS_TOKEN, DOMAIN_MOVIE, TOKEN } from "../../util/setting";
import { GET_CHI_TIET_PHONG_VE } from "../types/quanLyDatVeType";



export const layChiTietPhongVeAction = (maLichChieu) => {
    return (dispatch2) => {

        let promise = axios({
            method: 'get',
            url: `${DOMAIN_MOVIE}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            headers: {
                "TokenCybersoft": TOKEN
            }
        });
        promise.then((result) => {
       
            let action2 = {
                type: GET_CHI_TIET_PHONG_VE,
                chiTietPhongVe: result.data.content
            }
            dispatch2(action2); 
        });
        promise.catch(error => {
            console.log(error.response?.data);
        });
    }
}

export const datVeAction = (thongTinDatVe) => {
    return (dispatch2) => {

        let promise = axios({
            method: 'post',
            url: `${DOMAIN_MOVIE}/QuanLyDatVe/DatVe`,
            data: thongTinDatVe,
            headers: {
                "Authorization": "Bearer" + localStorage.getItem(ACCESS_TOKEN),
                "TokenCybersoft": TOKEN
            }
        });
        promise.then((result) => {
          console.log(result.data.content)
        });
        promise.catch(error => {
            console.log(error.response?.data);
        });
    }
}




