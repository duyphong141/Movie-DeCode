import axios from "axios";
import { DOMAIN_MOVIE, TOKEN } from "../../util/setting";
import { GET_CHI_TIET_PHIM, HE_THONG_RAP_CHIEU } from "../types/quanLyRapType";


export const danhSachHeThongRapAction = (dispatch2) => {
    let promise = axios({
        method: 'get',
        url: `${DOMAIN_MOVIE}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP04`,
        headers: {
            "TokenCybersoft": TOKEN
        }
    });
    promise.then((result) => {
        let action2 = {
            type: HE_THONG_RAP_CHIEU,
            heThongRapChieu: result.data.content
        }
        dispatch2(action2);
    });
    promise.catch((error) => {
        console.log(error);
    })
}

export const layChiTietPhimAction = (id) => {
    return (dispatch2) => {
        let promise = axios({
            method: 'get',
            url: `${DOMAIN_MOVIE}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
            headers: {
                "TokenCybersoft": TOKEN
            }
        });
        promise.then((result) => {
            let action2 = {
                type: GET_CHI_TIET_PHIM,
                phimDetail: result.data.content
            }
            dispatch2(action2);
        });
        promise.catch((error) => {
            console.log(error);
        })
    }
}


