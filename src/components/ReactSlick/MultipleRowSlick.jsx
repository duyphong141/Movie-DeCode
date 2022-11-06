import React, { Component } from "react";
import Slider from "react-slick";
// slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Phim from "../Phim";


export default class MultipleRows extends Component {

    renderPhim = () => {
        // console.log(this.props.phimArray)
        return this.props.phimArray.map(phim => {
            return <div className="cssphim" key={phim.maPhim}>
                <Phim phim={phim}/>
            </div>

        })
    }

    render() {
        const settings = {
            // className: "center",
            // centerMode: true,
            infinite: true,
            // centerPadding: "60px",
            slidesToShow: 4,
            speed: 500,
            rows: 2,
            slidesPerRow: 1,
            slidesToScroll: 3,
            dots: true,
            appendDots: dots => (
                <div
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    border: "black",
                    // margin: "50px"
                  }}
                >
                  <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
              ),
              customPaging: i => (
                <div
                  style={{
                    width: "30px",
                    color: "black",
                    border: "1px black solid"
                  }}
                >
                  {i + 1}
                </div>
              )
        };


        return (
            <div className="container">
                <h2>Danh sách phim</h2>
                <Slider {...settings}>

                    {this.renderPhim()}
                   

                    {/* <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                    <div>
                        <h3>10</h3>
                    </div>
                    <div>
                        <h3>11</h3>
                    </div>
                    <div>
                        <h3>12</h3>
                    </div>
                    <div>
                        <h3>13</h3>
                    </div>
                    <div>
                        <h3>14</h3>
                    </div>
                    <div>
                        <h3>15</h3>
                    </div>
                    <div>
                        <h3>16</h3>
                    </div> */}
                </Slider>
            </div>
        );
    }
}
