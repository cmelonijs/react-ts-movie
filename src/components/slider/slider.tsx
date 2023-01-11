import "./slider.css";
import Slick, { Settings } from "react-slick";

interface Props extends Settings {
  isMovieCard?: boolean
}

const Slider = (props: Props) => {
  let settings: Settings = {...props};

  if(props.isMovieCard) {
    settings = {
      ...settings,
      slidesToShow: 5,
      slidesToScroll: 5,
      swipe: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }
      ] 
    }
  }

  return (
    <Slick {...settings} autoplaySpeed={5000}>
      {props.children}
    </Slick>
  );
};

export default Slider;
