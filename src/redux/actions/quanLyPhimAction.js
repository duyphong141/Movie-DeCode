import axios from "axios";
import { DOMAIN_MOVIE, TOKEN } from "../../util/setting";
import { GET_DANHSACH_PHIM } from "../types/danhSachPhimType";


export const danhSachPhimAction = (dispatch2) => {
    let promise = axios({
        method: 'get',
        url: `${DOMAIN_MOVIE}/QuanLyPhim/LayDanhSachPhim?maNhom=GP04`,
        headers: {
            "TokenCybersoft": TOKEN
        }
    });
    promise.then((result) => {
        let action2 = {
            type: GET_DANHSACH_PHIM,
            phimArray: result.data.content
        }
        dispatch2(action2);
    });
    promise.catch((error) => {
        console.log(error);
    })
}

