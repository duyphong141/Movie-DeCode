import { GET_BANNER } from "../types/carouselType";

const initialState = {
    bannerArr: [
        // {
        //     "maBanner": 1,
        //     "maPhim": 1282,
        //     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
        // },
        // {
        //     "maBanner": 1,
        //     "maPhim": 1282,
        //     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
        // },
    ]
}

export const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNER:
            // console.log(action.type)
            state.bannerArr = action.bannerArr;
        return {...state};

        default:
            return state
    }
}
