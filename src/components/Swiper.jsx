import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import { Image, Text, Box } from '@chakra-ui/react';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Thumbs]);

export function SwiperCarrousel() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const slides = [];

    for (let i = 0; i < 5; i += 1) {
        slides.push(
            <SwiperSlide
                key={`slide-${i}`}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Image
                    // src={`https://picsum.photos/id/${i + 1}/500/300`}
                    src={`https://source.unsplash.com/collection/${i + 1}/1240x450`}
                    style={{ listStyle: 'none', width: "100%", margin: '0 20px' }}
                    alt={`Slide ${i}`}
                />
                <Text
                    position="absolute"
                    top="50%"
                    color="#fff"
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="2rem"
                >Europa</Text>
                <Text
                    position="absolute"
                    top="60%"
                    color="#fff"
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="1.4rem"
                >o continente mais antigo</Text>
            </SwiperSlide>
        )
    }

    const thumbs = [];
    for (let i = 0; i < 5; i += 1) {
        thumbs.push(
            <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
                <img src={`https://picsum.photos/id/${i + 1}/163/100`} />
            </SwiperSlide>
        )
    }
    return (
        <>
            <Swiper
                id="main"
                tag="section"
                wrapperTag="ul"
                navigation
                pagination
                spaceBetween={0}
                slidesPerView={1}
                onInit={(swiper) => console.log('Swiper initialized', swiper)}
                onSlideChange={(swiper) => { console.log('Slide index changed to: ', swiper.activeIndex) }}
                onReachEnd={() => console.log('Swiper end reached')}
                style={{ maxWidth: '1240px', position: 'relative' }}
            >
                {slides}
            </Swiper>

            {/* <Swiper id="thumbs" onSwiper={setThumbsSwiper}>
                {thumbs}
            </Swiper> */}
        </>
    )
}