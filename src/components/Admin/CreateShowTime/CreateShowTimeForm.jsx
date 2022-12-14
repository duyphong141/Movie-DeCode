import React, { useState, useEffect, Fragment } from "react";
import "./CreateShowTimeForm.scss";
import { qLyPhimService } from "../../../services/QuanLyPhimServices";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import swal from "sweetalert";

export default function CreateShowTimeForm(props) {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data.content);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  let [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layHeThongRap()
      .then((result) => {
        setHeThongRap(result.data.content);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  var moment = require("moment");
  let [maPhim, setMaPhim] = useState('');
  const layMaPhim = (event) => {
    // let maPhim = parseInt(event.target.value);
    let maPhim = event.target.value;
    setMaPhim(maPhim);
  };

  let [maHeThongRap, setMaHeThongRap] = useState();
  const layMaHeThongRap = (event) => {
    let maHeThongRap = event.target.value;
    setMaHeThongRap(maHeThongRap);
  };

  let [maCumRap, setMaCumRap] = useState();
  const layMaCumRap = (event) => {
    let maCumRap = event.target.value;
    setMaCumRap(maCumRap);
  };

  let [gioChieu, setGioChieu] = useState();
  const layGioChieu = (event) => {
    let gioChieu = event.target.value;
    setGioChieu(gioChieu);
  };

  let [ngayChieu, setNgayChieu] = useState();
  const layNgayChieu = (event) => {
    let ngayChieu = moment(event.target.value).format("DD/MM/yyyy");
    setNgayChieu(ngayChieu);
  };

  let ngayChieuGioChieu = `${ngayChieu} ${gioChieu}`;

  let [giaVe, setGiaVe] = useState();
  const layGiaVe = (event) => {
    let giaVe = parseInt(event.target.value);
    setGiaVe(giaVe);
  };

  let [maRap, setMaRap] = useState();
  const layMaRap = (event) => {
    let maRap = event.target.value;
    setMaRap(maRap);
  };

  let [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layThongTinCumRapTheoHeThong(maHeThongRap)
      .then((result) => {
        setCumRap(result.data.content);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  }, [maHeThongRap]);

  const renderHinhAnhPhim = () => {
    return danhSachPhim.map((phim, index) => {
      if (maPhim === phim.maPhim) {
        return <img src={phim.hinhAnh} alt={phim.hinhAnh} key={index} />;
      } else {
        return null;
      }
    });
  };

  const renderPhim = () => {
    return danhSachPhim?.map((phim, index) => {
      return (
        <option value={phim.maPhim} key={index}>
          {phim.tenPhim}
        </option>
      );
    });
  };

  const renderHeThongRap = () => {
    return heThongRap?.map((heThongRap, index) => {
      return (
        <option value={heThongRap.maHeThongRap} key={index}>
          {heThongRap.tenHeThongRap}
        </option>
      );
    });
  };

  const renderCumRap = () => {
    return cumRap.map((item, index) => {
      return (
        <option value={item.maCumRap} key={index}>
          {item.tenCumRap}
        </option>
      );
    });
  };

  const renderRap = () => {
    return cumRap?.map((item) => {
      if (maCumRap === item.maCumRap) {
        return item.danhSachRap.map((rap, index) => {
          return (
            <option value={rap.maRap} key={index}>
              {rap.tenRap}
            </option>
          );
        });
      }
    });
  };

  const taoLichChieu = () => {
    let thongTinLichChieu = {
      maPhim: maPhim,
      ngayChieuGioChieu: ngayChieuGioChieu,
      // maRap: maRap,
      maRap: maCumRap,
      giaVe: giaVe,
    };
    console.log(thongTinLichChieu)
    qLyAdminService
      .taoLichChieu(thongTinLichChieu)
      .then((res) => {
        swal({
          title: "Th??m l???ch chi???u th??nh c??ng",
          icon: "success",
          button: "OK",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response.data)
        swal({
          title: err.response.data.content,
          // text: "??i???n l???i th??ng tin!",
          icon: "warning",
          button: "OK",
        });
      });
  };

  return (
    <Fragment>
      <div className="container-fluid showtime-content">
        <div className="showtime-row row">
          <div className="left-col col-md-9 col-sm-12">
            <h2>Th??m l???ch chi???u phim</h2>
            <form className="addshowtime-form">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="textb">
                    <select name="phim" onChange={layMaPhim} id="selection">
                      <option value="#">--Ch???n phim--</option>
                      {renderPhim()}
                    </select>
                  </div>
                  <div className="textb">
                    <select
                      name="heThongRap"
                      onChange={layMaHeThongRap}
                      id="selection"
                    >
                      <option value="#">--Ch???n h??? th???ng r???p--</option>
                      {renderHeThongRap()}
                    </select>
                  </div>
                  <div className="textb">
                    <select name="cumRap" onChange={layMaCumRap} id="selection">
                      <option value="#">--Ch???n c???m r???p--</option>
                      {renderCumRap()}
                    </select>
                  </div>
                  <div className="textb">
                    <select name="rap" onChange={layMaRap} id="selection">
                      <option value="#">--Ch???n r???p--</option>
                      {renderRap()}
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="textb">
                    <input
                      type="date"
                      name="ngayChieu"
                      min="today"
                      onChange={layNgayChieu}
                      required
                    />
                    <div
                      className="placeholder"
                      style={{ left: "10px", top: "-20px" }}
                    >
                      Ng??y Chi???u
                    </div>
                  </div>
                  <div className="textb">
                    <input
                      type="text"
                      name="giochieu"
                      onChange={layGioChieu}
                      required
                    />
                    <div className="placeholder">Gi??? chi???u (gi???:ph??t:gi??y)</div>
                  </div>
                  <div className="textb">
                    <select name="giave" onChange={layGiaVe} id="selection">
                      <option value="#">--Ch???n gi?? v??--</option>
                      <option value="75000">75.000??</option>
                      <option value="95000">90.000??</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <button
              className="btn fas fa-arrow-right"
              onClick={() => {
                swal({
                  title: "T???o l???ch chi???u n??y?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                }).then((willDelete) => {
                  if (willDelete) {
                    taoLichChieu();
                  }
                });
              }}
            />
          </div>
          <div className="right-col col-md-3 col-sm-12">
            {renderHinhAnhPhim()}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
