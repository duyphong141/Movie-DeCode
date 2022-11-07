import { GET_BANNER, XEM_CHI_TIET } from "../types/QuanLyPhimTypes";

const initialState = {
  bannerArr: [],
  thongTinEdit: {
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    hinhAnh: "",
    trailer: "",
    moTa: "",
    ngayKhoiChieu: "",
    maNhom: "",
    danhGia: "",
  },
};

export const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case XEM_CHI_TIET: {
      state.thongTinEdit = action.values;
      return { ...state };
    }

    case GET_BANNER:
      // console.log(action.type)
      state.bannerArr = action.bannerArr;
      return { ...state };

    default:
      return state
  }
};
