import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import DroneCard from './DroneCard/DroneCard';
import lidDrone from '../../assets/three-drones/LiDAR-research.webp';
import agroDrone from '../../assets/three-drones/Agribusiness.webp';
import droneViewer from '../../assets/three-drones/Photo-video-production.webp';
import './swiperStylesTypesOfDrones.css';
import s from './ThreeTypesOfDrones.module.css';
import { useDashboard } from '../../hooks/useDashboard';

const ThreeTypesOfDrones = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const { isBigScreen } = useDashboard();
  const drones = [
    {
      linkTo: 'lidar-drone',
      imgSrc: lidDrone,
      imgAlt: 'lidar drone',
      title: 'LiDAR research',
    },
    {
      linkTo: 'agriculture-drone',
      imgSrc: agroDrone,
      imgAlt: 'agriculture drone',
      title: 'Agribusiness',
    },
    {
      linkTo: 'drone-viewer',
      imgSrc: droneViewer,
      imgAlt: 'drone viewer',
      title: 'Photo-video production',
    },
  ];

  const updatePagination = (index: number) => {
    const bullets = document.querySelectorAll(
      '.swiper_pagination_bullet_types_of_drones'
    );
    bullets.forEach((bullet, i) => {
      if (i === index) {
        bullet.classList.add('swiper-pagination-bullet-active');
      } else {
        bullet.classList.remove('swiper-pagination-bullet-active');
      }
    });
  };

  const handleFocus = (index: number) => {
    swiper.slideTo(index);
    updatePagination(index);
  };

  return (
    <section className={s.three_drones}>
      <h2 className={s.section_title}>
        Your Vision, <span className={s.title_accent}>Your Drone,</span> <br />{' '}
        Your Success
      </h2>

      <div className={s.three_drones_swiper}>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={16}
          slidesPerView={isBigScreen ? 3 : 'auto'}
          centeredSlides={!isBigScreen && true}
          initialSlide={1}
          className={s.swiper}
          autoHeight={true}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: '.swiper_pagination_types_of_drones',
            type: 'bullets',
            bulletClass: `swiper-pagination-bullet swiper_pagination_bullet_types_of_drones`,
            bulletActiveClass: `swiper-pagination-bullet-active`,
          }}
        >
          {drones.map((drone, index) => (
            <SwiperSlide
              key={index}
              className={s.slide}
              onFocus={() => handleFocus(index)}
            >
              <DroneCard {...drone} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper_pagination_types_of_drones"></div>
      </div>
    </section>
  );
};

export default ThreeTypesOfDrones;
