import { GET_DANHSACH_PHIM } from "../types/danhSachPhimType"
import { GET_CHI_TIET_PHIM } from "../types/quanLyRapType"

const initialState = {
    phimArray: [],
    phimDetail: {}
}

export const quanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DANHSACH_PHIM:
            state.phimArray = action.phimArray

            return { ...state }

        case GET_CHI_TIET_PHIM:
            state.phimDetail = action.phimDetail
            return { ...state }
        default:
            return state
    }
}


