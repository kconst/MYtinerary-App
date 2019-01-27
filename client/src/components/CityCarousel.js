import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const City = styled.img`
 height: 100px;
 width: 180px;
 padding: 0px 20px;
`;

class CityCarousel extends Component {
 render() {
   const settings = {
     dots: true,
     className: "center",
     centerMode: true,
     infinite: true,
     centerPadding: "20px",
     slidesToShow: 1,
     speed: 500,
     rows: 2,
     slidesPerRow: 2
   };

   return (
     <div>
       <Slider {...settings}>
         <div>
           <City src={require("../images/barcelona.jpg")} />
         </div>
         <div>
           <City src={require("../images/copenhagen.jpg")} />
         </div>
         <div>
           <City src={require("../images/telaviv.jpg")} />
         </div>
         <div>
           <City src={require("../images/vienna.jpg")} />
         </div>
         <div>
           <City src={require("../images/hongkong.jpg")} />
         </div>
         <div>
           <City src={require("../images/singapore.jpg")} />
         </div>
         <div>
           <City src={require("../images/sydney.jpg")} />
         </div>
         <div>
           <City src={require("../images/tokyo.jpg")} />
         </div>
         <div>
           <City src={require("../images/buenosaires.jpg")} />
         </div>
         <div>
           <City src={require("../images/medellin.jpg")} />
         </div>
         <div>
           <City src={require("../images/sanfrancisco.jpg")} />
         </div>
         <div>
           <City src={require("../images/vancouver.jpg")} />
         </div>
       </Slider>
     </div>
   );
 }
}

export default CityCarousel;