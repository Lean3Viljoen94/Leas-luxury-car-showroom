import React, { Component } from 'react';

// Import react carousel library
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import images from local folder 
import pink1 from '../Images/pink1.jpg';
import pink2 from '../Images/pink2.jpg';
import pink3 from '../Images/pink3.jpg';
 
class CarCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img src={pink1} alt="Oops, not found" />
                </div>
                <div>
                    <img src={pink2} alt="Oops, not found" />
                </div>
                <div>
                    <img src={pink3} alt="Oops, not found" />
                </div>
            </Carousel>
        );
    }
};

export default CarCarousel;

//Pink1 - Photo by Clem Onojeghuo on Unsplash
//Pink 2 - Photo by Christen LaCorte on Unsplash
//Pink 3 - Photo by NeONBRAND on Unsplash
