import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
//import "@fortawesome/fontawesome-free/js/all.js";

import "./PickArticle.scss"

export class PickArticle extends Component {

  handleStars = () => {
    const { tags } =this.props;
    const newTags = tags.join(", ");
    if(newTags.length > 15){
      return newTags.substring(0, 15)+"..."
    } else{
      return newTags
    }
  }

  render() {
    const { name, engName, desc, mainImg, location, type, minPrice, maxPrice, tags } = this.props;
    const newTags = tags.join(", ");

    return (
      <article className="PickArticle">
        <div className="imgCon">
         
          <img alt="mainimg" src={mainImg} />
          <div className="viewBox">
            <i className="fas fa-search"></i>
            <span>VIEW</span>
          </div>     
       </div>
        <div className="articleInfo">
          <div className="hotelName">
            <h4><a href="/">{name}</a></h4>
            <span className="eng">{engName}</span>
          </div>
          <div className="bookingLink">
            <a href="true">BOOKING NOW</a>
          </div>
          <span>{desc}</span>
    
          <div className="infoCon">
            <div className="infoLine">
              <div className="con">
                <i className="fas fa-map-marker-alt"></i>
                <span>{location}</span>
                <span className="centerLine">|</span>
              </div>
              <div className="con">
                <i className="fas fa-home"></i>
                <span>{type}</span>  
              </div>
            </div>

            <div className="infoLine">
              <div className="con">
                <i className="fas fa-coins"></i>
                <span>{minPrice}~{maxPrice}</span>
                <span className="centerLine">|</span>
              </div>
              <div className="con">
                <i className="fas fa-star"></i>
                <span>{newTags.length > 14? newTags.substring(0,14)+"..." : newTags}</span>  
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default PickArticle;