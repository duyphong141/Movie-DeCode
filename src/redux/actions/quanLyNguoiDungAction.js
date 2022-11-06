import axios from "axios";
import { history } from "../../App";
import { DOMAIN_MOVIE, TOKEN } from "../../util/setting";
import { DANG_NHAP } from "../types/quanLyNguoiDungType";


export const dangNhapAction = (userLogin) => {
    return (dispatch2) => {

        let promise = axios({
            method: 'post',
            url: `${DOMAIN_MOVIE}/QuanLyNguoiDung/DangNhap`,
            data: userLogin, 
            headers: {
                "TokenCybersoft": TOKEN
            }
        });
        promise.then((result) => {

            let action2 = {
                type: DANG_NHAP,
                userLogin: result.data.content
            }
            dispatch2(action2); 
            // chuyển hướng về trang trước đó
            history.goBack();
        });
        promise.catch(error => {
            console.log(error.response?.data);
        });
    }
}




