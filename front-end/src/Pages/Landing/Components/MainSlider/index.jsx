import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import { Navigation, Autoplay } from 'swiper/modules';

export default function MainSLider() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "sliders?populate=*", {
      headers: {
        'Content-type': 'application/json',

      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
      })

  }, [])

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
    
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data?.map((e, index) => {
          return <SwiperSlide key={index}>
            <img

              src={process.env.REACT_APP_BASE_URL + e?.attributes?.img?.data?.attributes?.url} alt={e?.attributes?.title} />

          </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}

