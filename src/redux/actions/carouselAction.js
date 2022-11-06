import axios from "axios";
import { DOMAIN_MOVIE, TOKEN } from "../../util/setting";
import { GET_BANNER } from "../types/carouselType";

export const carouselAction = (dispatch2) => {
    let promise = axios({
        method: 'get',
        url: `${DOMAIN_MOVIE}/QuanLyPhim/LayDanhSachBanner`,
        headers: {
            "TokenCybersoft": TOKEN
        }
    });
    promise.then((result) => {
        // console.log(result.data.content);
        let action2 = {
            type: GET_BANNER,
            bannerArr: result.data.content
        }
        dispatch2(action2);
    });
    promise.catch((error) => {
        console.log(error);
    })
}