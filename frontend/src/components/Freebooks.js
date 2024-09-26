import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import FreeCard from "./FreeCard";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", mixBlendMode: 'difference' }}
      onClick={onClick}
    />
  );
}

const Freebooks = () => {
    var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          nextArrow: <SamplePrevArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
            <h3 className="text-3xl text-green-500 font-semibold">Free Books for Every Reader!</h3>
            <p className="text-zinc-500 font-medium mt-4">Join us in celebrating the joy of reading with our selection of free books. These carefully chosen titles span genres and topics, offering something for everyone. Dive into the world of literature without any financial barriers. Start exploring our free books today and ignite your passion for reading!</p>

            <div className="slider-container my-10 px-3 md:px-0">
                <Slider {...settings}>
                  <FreeCard />
                  <FreeCard />
                  <FreeCard />
                  <FreeCard />
                  <FreeCard />
                  <FreeCard />
                </Slider>
            </div>
        </div>
        
    )
}

export default Freebooks;