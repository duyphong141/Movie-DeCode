import axios from "axios";
import { domain, DOMAIN_MOVIE, groupID, TOKEN } from "../config/setting";
export class QuanLyPhimServices {

  layDanhSachBanner = () => {
    axios({
      method: 'get',
      url: `${DOMAIN_MOVIE}/QuanLyPhim/LayDanhSachBanner`,
      headers: {
        "TokenCybersoft": TOKEN
      }
    });
  }

  layDanhSachPhim = () => {
    return axios({
      method: 'get',
      url: `${DOMAIN_MOVIE}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
      headers: {
        "TokenCybersoft": TOKEN
      }
    });
  }

  layThongTinPhim = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
  };
  layHeThongRap = () => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
      headers: {
        "TokenCybersoft": TOKEN
      }
    });
  };

  layCumRapTheoHeThong = () => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID}`,
      method: "GET",
      headers: {
        "TokenCybersoft": TOKEN
      }
    });
  };

  layThongTinCumRapTheoHeThong = (maHeThongRap) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
    });
  };

  layThongTinPhongVe = (maLichChieu) => {
    return axios({
      url: `${domain}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });
  };
  layTinTuc = () => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/news",
      method: "GET",
    });
  };
  layChiTietTinTuc = (maTinTuc) => {
    return axios({
      url: `https://5e9829e75eabe7001681bbfb.mockapi.io/news/${maTinTuc}`,
      method: "GET",
    });
  };
}

export const qLyPhimService = new QuanLyPhimServices();
