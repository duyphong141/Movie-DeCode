import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { QuanLyNguoiDungReducer } from "./QuanLyNguoiDungReducer";
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";


const rootReducer = combineReducers({
  QuanLyNguoiDungReducer,
  QuanLyPhimReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk)); 
