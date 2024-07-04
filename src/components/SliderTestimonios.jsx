import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Responsive({ content }) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 8000,
        // cssEase: "linear",
        pauseOnHover: false,
        arrows: false,

    };
    return (
        <div className="slider-container">
            <Slider {...settings} autoplay={true}>
                {content.map((i, index) => (
                    <div className='text-center p-[100px] lg:p-[200px]'>
                        <p className='italic text-white' dangerouslySetInnerHTML={{ __html: i.paragraph }}></p>
                        <br />
                        <h4 className='font-bold italic text-white'>{i.title}</h4>
                    </div>
                ))}
            </Slider>
        </div>
    );
}


export default Responsive;
