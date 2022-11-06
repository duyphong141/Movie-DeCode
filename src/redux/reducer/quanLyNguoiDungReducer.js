import { ACCESS_TOKEN, USER_LOGIN } from "../../util/setting";
import { DANG_NHAP } from "../types/quanLyNguoiDungType"

// console.log('reducer 1')
let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem("USER_LOGIN"))
}

const initialState = {
    userLogin: user
}
// console.log('reducer 2')
export const quanLyNguoiDungReducer = (state = initialState, action) => {
    // console.log('reducer 3')
    switch (action.type) {

        case DANG_NHAP: {
            // console.log('reducer 4')
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.userLogin))
            localStorage.setItem(ACCESS_TOKEN, JSON.stringify(action.userLogin.accessToken
            ))
            state.userLogin = action.userLogin
            return { ...state }
        }

        default:
            // console.log('reducer 5')
            return state
    }
}
