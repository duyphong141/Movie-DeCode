import { DAT_VE, GET_CHI_TIET_PHONG_VE } from "../types/quanLyDatVeType";

const initialState = {
    chiTietPhongVe: {},
    danhSachGheDangDat: []
}

export const quanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe;
            return { ...state };
        }

        case DAT_VE: {

            // cập nhật danh sách ghế đang đặt
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhat.findIndex(ghe => ghe.maGhe === action.gheDuocChon.maGhe)
            if (index !== -1) {
                // Nếu tìm được ghế action giống trong mảng là đã được click rồi => xóa đi
                danhSachGheCapNhat.splice(index, 1)
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon);
            }
            return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
        }

        default:
            return state
    }
}
