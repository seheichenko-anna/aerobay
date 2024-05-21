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
  const { isLaptopOrTablet, isMobileOrBigScreen, isBigScreen } = useDashboard();
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
              <div className={s.slider_wrapper}>
                <img src={lidDrone} className={s.img_drone} />
                <Link to="lidar-drone" className={s.arrow_wrapper}>
                  <svg className={s.arrow}>
                    <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                  </svg>
                </Link>
                <h3 className={s.drone_title}>LiDAR research</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.slide}>
              <div className={s.slider_wrapper}>
                <img src={agroDrone} className={s.img_drone} />
                <Link to="agriculture-drone" className={s.arrow_wrapper}>
                  <svg className={s.arrow}>
                    <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                  </svg>
                </Link>
                <h3 className={s.drone_title}>Agribusiness</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.slide}>
              <div className={s.slider_wrapper}>
                <img src={droneViewer} className={s.img_drone} />
                <Link to="drone-viewer" className={s.arrow_wrapper}>
                  <svg className={s.arrow}>
                    <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                  </svg>
                </Link>
                <h3 className={s.drone_title}>Photo-video production</h3>
              </div>
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
            <img src={lidDrone} className={s.img_drone} />
            <Link to="lidar-drone" className={s.arrow_wrapper}>
              <svg className={s.arrow}>
                <use xlinkHref={`${svg}#icon-arrow-up-right`} />
              </svg>
            </Link>
            <h3 className={s.drone_title}>LiDAR research</h3>
          </li>
          <li className={s.drone_wrapper}>
            <img src={agroDrone} className={s.img_drone} />
            <Link to="agriculture-drone" className={s.arrow_wrapper}>
              <svg className={s.arrow}>
                <use xlinkHref={`${svg}#icon-arrow-up-right`} />
              </svg>
            </Link>
            <h3 className={s.drone_title}>Agribusiness</h3>
          </li>
          <li className={s.drone_wrapper}>
            <img src={droneViewer} className={s.img_drone} />
            <Link to="drone-viewer" className={s.arrow_wrapper}>
              <svg className={s.arrow}>
                <use xlinkHref={`${svg}#icon-arrow-up-right`} />
              </svg>
            </Link>
            <h3 className={s.drone_title}>Photo-video production</h3>
          </li>
        </ul>
      )}
    </section>
  );
};

export default ThreeTypesOfDrones;
