import { HE_THONG_RAP_CHIEU } from "../types/quanLyRapType"

const initialState = {
    heThongRapChieu: []
}

export const quanLyRapReducer = (state = initialState, action) => {
    switch (action.type) {
        case HE_THONG_RAP_CHIEU: {
            state.heThongRapChieu = action.heThongRapChieu
            return {...state}
        }
        
        default:
            return state
    }
}


