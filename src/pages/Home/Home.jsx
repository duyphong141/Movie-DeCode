import React from 'react'
import CarouselMovie from '../../components/CarouselMovie'
import Footer from '../../components/Footer'

import Header from '../../components/Header'
import DanhSachRapPhim from './DanhSachRapPhim'

import ListPhim from './ListPhim'

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselMovie />

      <ListPhim/>

      <div className="container danhsach_rap">
        <DanhSachRapPhim />
      </div>

      <Footer/>

    </div>
  )
}
