import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangNhapAction } from '../../redux/actions/quanLyNguoiDungAction';

// console.log('login 1')
export default function Login() {

  let dispatch = useDispatch();

  const {userLogin} = useSelector(state => state.quanLyNguoiDungReducer);
  // console.log('login 2')
  console.log(userLogin)  

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    onSubmit: values => {
      // console.log('login 3')
      let action = dangNhapAction(values);
      dispatch(action)
      // console.log('login 3')
    },
  });
  // console.log('login 4')
  return (
    <div style={{
      backgroundImage: `url(https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'
    }} className="relative flex flex-col justify-center min-h-screen overflow-hidden" >
      <div className="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
        <h1 className="text-3xl font-semibold text-center text-purple-700">ĐĂNG NHẬP</h1>
        <form onSubmit={formik.handleSubmit} className="mt-6">
          <div>
            <label htmlFor="text" className="block text-sm text-gray-800">Tài khoản</label>
            <input name='taiKhoan' onChange={formik.handleChange} type="text" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Nhập vào tài khoản'/>
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">Mật khẩu</label>
              <input name='matKhau' onChange={formik.handleChange} type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Nhập vào mật khẩu'/>
            </div>
            <a href="#" className="text-xs text-gray-600 hover:underline">Quên mật khẩu?</a>
            <div className="mt-6">
              <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Đăng nhập
              </button>
            </div>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700"> Bạn chưa có tài khoản? <NavLink to='/register' className="font-medium text-purple-600 hover:underline">Đăng ký</NavLink></p>
      </div>
    </div>


  )
}
