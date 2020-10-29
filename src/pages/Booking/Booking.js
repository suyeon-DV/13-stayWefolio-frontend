import React, { Component } from "react";
import "../Booking/Booking.scss";

const API = "http://10.58.1.45:8000/main/banner";

export class Booking extends Component {
  constructor() {
    super();
    this.state = {
      bookingBannerList: [],
      hover: false,
    };
  }

  componentDidMount = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bookingBannerList: res.data,
        });
      });
  };

  /* 구현 예정 */
  fetchBtn = (e) => {
    const LIMIT = 10;
    const offset = e.target.dataset.image;

    fetch(`http://10.58.1.45:8000/main/banner?banner=${LIMIT}&offset=${offset}`)
      .then((res) => res.json())
      .then((res) => this.setState({ bookingBannerList: res.data }));
  };

  render() {
    const { bookingBannerList } = this.state;

    return (
      <div className="Booking">
        <header>
          <div className="headerBox contentContainer">
            <div className="headerLeft">
              <div className="headerLeftContainer">
                <span className="switchTitle">MAP MODE</span>
                <label className="switchBtn">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <span className="switchOff">OFF</span>
              </div>
            </div>
            <div className="headerRight">
              <div className="headerRightContainer">
                <div className="searchSpan">
                  <span>SEARCH</span>
                </div>
                <div className="hBar"></div>
                <div className="checkInOutBox">
                  <div className="checkInBox">
                    <i class="far fa-calendar-alt"></i>
                    <span>Check In</span>
                  </div>
                  <div className="wBar"></div>
                  <div className="checkOutBox">
                    <i class="far fa-calendar-alt"></i>
                    <span>Check Out</span>
                  </div>
                </div>
                {/* <div>뱅기, 바</div> */}
                <div className="hBar"></div>
                <div className="planeIconBox">
                  <i class="far fa-paper-plane"></i>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="bookingBoard">
          {bookingBannerList.map((banner, idx) => (
            <div className="bannerBox" key={idx}>
              <img
                className="bannerImage"
                src={banner.thumbnail_url}
                alt="banner"
              />
              <div className="bannerTextContainer">
                <p className="bannerTopText noneStyle">LAUNCHING EVENT</p>
                <p className="bannerTitle">{banner.name}</p>
                <p className="bannerDesc noneStyle">{banner.introduction}</p>
                <button className="bannerBtn noneStyle">SHOW NOW</button>
              </div>
            </div>
          ))}
          {/* <button className="paginationBtn" onClick={this.fetchBtn}>
            페이지네이션 구현할 자리
          </button> */}
        </div>
      </div>
    );
  }
}
export default Booking;