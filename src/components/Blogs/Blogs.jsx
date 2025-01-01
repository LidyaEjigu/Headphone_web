import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IMG1 from "../../assets/images/IMG1.jpg";
import IMG2 from "../../assets/images/IMG2.jpg";
import IMG3 from "../../assets/images/IMG3.jpg";
import IMG4 from "../../assets/images/IMG4.jpg";

// Testimonial Data
const testimonialData = [
  {
    id: 1,
    name: "Dinkinesh Abera",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: IMG1,
  },
  {
    id: 2,
    name: "Ali Mohamed",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: IMG2,
  },
  {
    id: 3,
    name: "Liyat Tesfaye",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: IMG3,
  },
  {
    id: 4,
    name: "Marta Zewdu",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: IMG4,
  },
];

const Blogs = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Blogs
          </h1>
        </div>

        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-gray-100 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
