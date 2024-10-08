import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useSpring, animated } from '@react-spring/web';
import { useDashboard } from '../../hooks/useDashboard';
import DroneTitle from './DroneTitle/DroneTitle';
import CostInfo from './CostInfo/CostInfo';
import liddarDrone from '../../assets/customize-drone/lidDAR-drone.webp';
import agroDrone from '../../assets/customize-drone/agro-drone.webp';
import droneViewer from '../../assets/customize-drone/viewer-drone.webp';
import svg from '../../assets/sprite.svg';
import './swiperStyles.css';
import s from './CustomizeDrone.module.css';

const CustomizeDrone = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { isBigScreenOrTablet, isAllMobile, isBigScreen } = useDashboard();

  const customizeDrones = [
    {
      title: 'LID Drone 200',
      cost: 500,
      background: 'liddar_drone_background',
      image: liddarDrone,
      link: 'lidar-drone',
      tips: [
        {
          text: 'Downlink antenna',
          position: { top: '30%', left: '0%' },
        },
        {
          text: 'Battery',
          position: { top: '39%', left: '54%' },
        },
        {
          text: 'Camera',
          position: { top: '60%', left: '27%' },
        },
      ],
    },
    {
      title: 'Drone Viewer 2700',
      cost: 500,
      background: 'drone_viewer_background',
      image: droneViewer,
      link: 'drone-viewer',
      tips: [
        {
          text: 'Battery',
          position: { top: '38%', left: '52%' },
        },
        {
          text: 'Camera',
          position: { top: '60%', left: '32%' },
        },
      ],
    },
    {
      title: 'Drone Agras 250',
      cost: 800,
      background: 'agro_drone_background',
      image: agroDrone,
      link: 'agriculture-drone',
      tips: [
        {
          text: 'Downlink antenna',
          position: { top: '33%', left: '2%' },
        },
        {
          text: 'Battery',
          position: { top: '39%', left: '52%' },
        },
        {
          text: 'Tank',
          position: { top: '42%', left: '28%' },
        },
      ],
    },
  ];

  useEffect(() => {
    if (swiper) {
      const handleSlideChange = () => {
        setActiveIndex(swiper.realIndex);
      };

      swiper.on('slideChange', handleSlideChange);

      return () => {
        swiper.off('slideChange', handleSlideChange);
      };
    }
  }, [swiper]);

  const goNext = useCallback(() => swiper?.slideNext(), [swiper]);
  const goPrev = useCallback(() => swiper?.slidePrev(), [swiper]);

  return (
    <section className={s.customize_drone_section}>
      <div className={s.container}>
        <div className={s.title_section_wrapper}>
          <h2 className={s.section_customize_title}>
            <span className={s.accent_color}>Customize</span> your own drone for
            your business needs
          </h2>
          <p className={s.text_under_title}>
            You can choose a base drone tailored to suit your business needs
          </p>
        </div>

        {isAllMobile && (
          <DroneTitle
            activeIndex={activeIndex}
            titles={customizeDrones.map(drone => drone.title)}
          />
        )}

        <div className={`${s.drone_background}`}>
          {isBigScreenOrTablet && (
            <DroneTitle
              activeIndex={activeIndex}
              titles={customizeDrones.map(drone => drone.title)}
            />
          )}
          <Swiper
            onSwiper={setSwiper}
            spaceBetween={isAllMobile ? '5%' : '10%'}
            slidesPerView={'auto'}
            centeredSlides
            loop
            autoplay={{ delay: 3000 }}
            speed={1000}
            effect="fade"
            noSwiping
            pagination={{
              clickable: true,
              el: '.swiper_pagination',
              type: 'bullets',
              bulletClass: `swiper-pagination-bullet swiper_pagination_bullet_customize_drone`,
            }}
            modules={[Pagination, Autoplay]}
            className={`${'swiper_customize_drone'} ${isBigScreenOrTablet ? 'customize_background' : ''}`}
          >
            {customizeDrones.map((drone, index) => (
              <SwiperSlide
                key={index}
                className={`${'swiper_slide_customize_drone'} ${isBigScreenOrTablet ? '' : 'customize_background'}`}
              >
                <div className={s.img_wrapper}>
                  <img
                    src={drone.image}
                    className={s.drone_img}
                    alt={drone.title}
                  />
                  {drone.tips.map((tip, i) => {
                    const isActive = activeIndex === index;
                    const tipSpring = useSpring({
                      opacity: isActive ? 1 : 0,
                      from: { opacity: 0 },
                      reset: true,
                      delay: 500,
                      key: `${activeIndex}-${i}`,
                    });

                    return (
                      <animated.div
                        key={`${activeIndex}-${i}`}
                        className={s.tip}
                        style={{
                          ...tipSpring,
                          top: tip.position.top,
                          left: tip.position.left,
                        }}
                      >
                        {tip.text === 'Battery' && (
                          <span className={s.point_green}></span>
                        )}
                        <div className={s.tip_wrapper}>
                          <span className={s.point}></span>
                          {tip.text}
                        </div>
                        {tip.text !== 'Battery' && (
                          <span className={s.point_green}></span>
                        )}
                      </animated.div>
                    );
                  })}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper_pagination swiper_pagination_customize_drone"></div>
          {isBigScreenOrTablet && (
            <>
              <button
                className={`${s.swiper_button_arrow} ${s.custom_swiper_prev}`}
                onClick={goPrev}
                aria-label="Previous Slide"
              >
                <svg className={s.icon_arrow}>
                  <use xlinkHref={`${svg}#icon-arrow-left`} />
                </svg>
              </button>
              <button
                className={`${s.swiper_button_arrow} ${s.custom_swiper_next}`}
                onClick={goNext}
                aria-label="Next Slide"
              >
                <svg className={s.icon_arrow}>
                  <use xlinkHref={`${svg}#icon-arrow-right`} />
                </svg>
              </button>

              <CostInfo
                activeIndex={activeIndex}
                links={customizeDrones.map(drone => drone.link)}
                costs={customizeDrones.map(drone => drone.cost)}
              />
            </>
          )}
        </div>

        {isAllMobile && (
          <CostInfo
            activeIndex={activeIndex}
            links={customizeDrones.map(drone => drone.link)}
            costs={customizeDrones.map(drone => drone.cost)}
          />
        )}

        {isBigScreenOrTablet && (
          <>
            <p className={s.text_under_swiper}>
              Or You can Customize Base Drone by <br />
              adding/deleting accessories which are more <br />
              accomplished to your business
            </p>
            <Link to="customize-drone" className={s.link_to_customize_drone}>
              Get started
            </Link>
          </>
        )}

        {isBigScreen && <div className={s.circle}></div>}
      </div>
    </section>
  );
};

export default CustomizeDrone;
