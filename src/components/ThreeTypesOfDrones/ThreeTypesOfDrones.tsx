import s from './ThreeTypesOfDrones.module.css';
import svg from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';
import { useDashboard } from '../../hooks/useDashboard';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import lidDrone from '../../assets/three-drones/LiDAR-research.jpg';
import agroDrone from '../../assets/three-drones/Agribusiness.jpg';
import droneViewer from '../../assets/three-drones/Photo-video-production.jpg';
import { useEffect, useState } from 'react';
import CustomPagination from '../CustomPagination/CustomPagination';

const ThreeTypesOfDrones = () => {
  const { isLaptopOrTablet, isMobileOrBigScreen } = useDashboard();
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveIndex(swiper.realIndex);
      });
    }
  }, [swiper]);

  const goToSlide = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  const handleLinkFocus = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className={s.three_drones}>
      <h2 className={s.section_title}>
        Your Vision, <span className={s.title_accent}>Your Drone,</span> <br />{' '}
        Your Success
      </h2>

      {isLaptopOrTablet && (
        <div className={s.three_drones_swiper}>
          <Swiper
            onSwiper={setSwiper}
            spaceBetween={16}
            slidesPerView={'auto'}
            centeredSlides={true}
            initialSlide={1}
            className={s.swiper}
          >
            <SwiperSlide className={s.slide}>
              <Link
                to="lidar-drone"
                className={s.slider_wrapper}
                aria-label="Link to LiDAR research drone"
                onFocus={() => handleLinkFocus(0)}
              >
                <img src={lidDrone} className={s.img_drone} alt="lidar drone" />
                <div className={s.arrow_wrapper}>
                  <svg className={s.arrow} aria-label="arrow icon">
                    <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                  </svg>
                </div>
                <h3 className={s.drone_title}>LiDAR research</h3>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={s.slide}>
              <Link
                to="agriculture-drone"
                className={s.slider_wrapper}
                aria-label="Link to Agribusiness drone"
                onFocus={() => handleLinkFocus(1)}
              >
                <img
                  src={agroDrone}
                  className={s.img_drone}
                  alt="agriculture drone"
                />
                <div className={s.arrow_wrapper}>
                  <svg className={s.arrow} aria-label="arrow icon">
                    <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                  </svg>
                </div>
                <h3 className={s.drone_title}>Agribusiness</h3>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={s.slide}>
              <Link
                to="drone-viewer"
                className={s.slider_wrapper}
                aria-label="Link to Photo-video production drone"
                onFocus={() => handleLinkFocus(2)}
              >
                <img
                  src={droneViewer}
                  className={s.img_drone}
                  alt="drone viewer"
                />
                <div className={s.arrow_wrapper}>
                  <svg className={s.arrow} aria-label="arrow icon">
                    <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                  </svg>
                </div>
                <h3 className={s.drone_title}>Photo-video production</h3>
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className={s.pagination}>
            <CustomPagination
              activeIndex={activeIndex}
              goToSlide={goToSlide}
              color="black"
            />
          </div>
        </div>
      )}

      {isMobileOrBigScreen && (
        <ul className={s.three_drones_list}>
          <li className={s.drone_wrapper}>
            <Link to="lidar-drone" aria-label="Link to LiDAR research drone">
              <img src={lidDrone} className={s.img_drone} alt="lidar drone" />
              <div className={s.arrow_wrapper}>
                <svg className={s.arrow} aria-label="arrow icon">
                  <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                </svg>
              </div>
              <h3 className={s.drone_title}>LiDAR research</h3>
            </Link>
          </li>
          <li className={s.drone_wrapper}>
            <Link
              to="agriculture-drone"
              aria-label="Link to Agribusiness drone"
            >
              <img
                src={agroDrone}
                className={s.img_drone}
                alt="agriculture drone"
              />
              <div className={s.arrow_wrapper}>
                <svg className={s.arrow} aria-label="arrow icon">
                  <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                </svg>
              </div>
              <h3 className={s.drone_title}>Agribusiness</h3>
            </Link>
          </li>
          <li className={s.drone_wrapper}>
            <Link
              to="drone-viewer"
              aria-label="Link to Photo-video production drone"
            >
              <img
                src={droneViewer}
                className={s.img_drone}
                alt="drone viewer"
              />
              <div className={s.arrow_wrapper}>
                <svg className={s.arrow} aria-label="arrow icon">
                  <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                </svg>
              </div>
              <h3 className={s.drone_title}>Photo-video production</h3>
            </Link>
          </li>
        </ul>
      )}
    </section>
  );
};

export default ThreeTypesOfDrones;
