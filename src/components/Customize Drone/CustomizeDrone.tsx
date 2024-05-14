import { Link } from 'react-router-dom';
import s from './CustomizeDrone.module.css';
import liddarDrone from '../../assets/customize-drone/lidDAR-drone.png';
import agroDrone from '../../assets/customize-drone/agro-drone.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import svg from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';
import CustomPagination from '../CustomPagination/CustomPagination';

const CustomizeDrone = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);
  const [isLastSlide, setIsLastSlide] = useState<boolean>(false);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveIndex(swiper.realIndex);
        setIsFirstSlide(swiper.isBeginning);
        setIsLastSlide(swiper.isEnd);
      });
    }
  }, [swiper]);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const goToSlide = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <section className={s.customize_drone_section}>
      <div className={s.container}>
        <h2 className={s.section_customize_title}>
          <span className={s.accent_color}>Customize</span> your own drone
          <br />
          for your business need
        </h2>
        <p className={s.text_under_title}>
          You can choose a base drone tailored to suit your business needs
        </p>
        <div className={s.drone_background}>
          <Swiper
            onSwiper={setSwiper}
            spaceBetween={64}
            slidesPerGroup={1}
            slidesPerView={1}
            centeredSlides={false}
          >
            <SwiperSlide>
              <div
                className={`${s.drone_background_wrapper} ${s.liddar_background}`}
              >
                <div className={s.drone_info_wrapper}>
                  <div>
                    <h3 className={s.drone_title}>LIDDrone 200</h3>
                    <p className={s.equipment}>(basic equipment)</p>
                  </div>
                  <img src={liddarDrone} className={s.drone_img} />
                  <div
                    className={`${s.equipment_item} ${s.antenna} ${s.lidd_antenna}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Downlink antenna</p>
                  </div>
                  <div
                    className={`${s.equipment_item} ${s.buttery} ${s.lidd_buttery}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Buttery</p>
                  </div>
                  <div
                    className={`${s.equipment_item} ${s.tank} ${s.lidd_tank}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Tank</p>
                  </div>
                  <div
                    className={`${s.equipment_item} ${s.camera} ${s.lidd_camera}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Camera</p>
                  </div>
                  <div className={s.cost_info}>
                    <p className={s.total_cost}>Total cost: </p>
                    <p className={s.cost_value}>
                      <span>$ 18 000</span>
                    </p>
                    <Link to="lidar-drone" className={s.link_base_model}>
                      <span>Bye base model</span>
                      <span className={s.arrow_wrapper}>
                        <svg className={s.icon_arrow_link}>
                          <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className={s.pagination}>
                  <CustomPagination
                    activeIndex={activeIndex}
                    goToSlide={goToSlide}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`${s.drone_background_wrapper} ${s.agro_background}`}
              >
                <div className={s.drone_info_wrapper}>
                  <div>
                    <h3 className={s.drone_title}>AgroDrone 250</h3>
                    <p className={s.equipment}>(basic equipment)</p>
                  </div>
                  <img src={agroDrone} className={s.drone_img} />
                  <div
                    className={`${s.equipment_item} ${s.antenna} ${s.agro_antenna}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Downlink antenna</p>
                  </div>
                  <div
                    className={`${s.equipment_item} ${s.buttery} ${s.agro_buttery}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Buttery</p>
                  </div>
                  <div
                    className={`${s.equipment_item} ${s.tank} ${s.agro_tank}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Tank</p>
                  </div>
                  <div
                    className={`${s.equipment_item} ${s.camera} ${s.agro_camera}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Camera</p>
                  </div>
                  <div className={s.cost_info}>
                    <p className={s.total_cost}>Total cost: </p>
                    <p className={s.cost_value}>
                      <span>$ 18 000</span>
                    </p>
                    <Link to="agriculture-drone" className={s.link_base_model}>
                      <span>Bye base model</span>
                      <span className={s.arrow_wrapper}>
                        <svg className={s.icon_arrow_link}>
                          <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className={s.pagination}>
                  <CustomPagination
                    activeIndex={activeIndex}
                    goToSlide={goToSlide}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`${s.drone_background_wrapper} ${s.liddar_background}`}
              >
                <div className={s.drone_info_wrapper}>
                  <div>
                    <h3 className={s.drone_title}>LIDDrone 200</h3>
                    <p className={s.equipment}>(basic equipment)</p>
                  </div>
                  <img src={liddarDrone} className={s.drone_img} />
                  <div
                    className={`${s.equipment_item} ${s.antenna} ${s.lidd_antenna}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Downlink antenna</p>
                  </div>
                  <div
                    className={`${s.equipment_item} ${s.buttery} ${s.lidd_buttery}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Buttery</p>
                  </div>
                  <div
                    className={`${s.equipment_item} ${s.tank} ${s.lidd_tank}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Tank</p>
                  </div>
                  <div
                    className={`${s.equipment_item} ${s.camera} ${s.lidd_camera}`}
                  >
                    <span className={s.dot}></span>
                    <p className={s.equipment_name}>Camera</p>
                  </div>
                  <div className={s.cost_info}>
                    <p className={s.total_cost}>Total cost: </p>
                    <p className={s.cost_value}>
                      <span>$ 18 000</span>
                    </p>
                    <Link to="lidar-drone" className={s.link_base_model}>
                      <span>Bye base model</span>
                      <span className={s.arrow_wrapper}>
                        <svg className={s.icon_arrow_link}>
                          <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className={s.pagination}>
                  <CustomPagination
                    activeIndex={activeIndex}
                    goToSlide={goToSlide}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div
            className={`${!isFirstSlide ? s.swiper_button_next : s.swiper_button_prev} ${s.custom_swiper_prev}`}
            onClick={goPrev}
          >
            <svg className={s.icon_arrow_prev}>
              <use xlinkHref={`${svg}#icon-arrow-left`} />
            </svg>
          </div>
          <div
            className={`${isLastSlide ? s.swiper_button_prev : s.swiper_button_next} ${s.custom_swiper_next}`}
            onClick={goNext}
          >
            <svg className={s.icon_arrow_prev}>
              <use xlinkHref={`${svg}#icon-arrow-right`} />
            </svg>
          </div>
        </div>
        <p className={s.text_under_swiper}>
          Or You can Customize Base Drone by <br />
          adding /deleting accessories which are more <br />
          accomplish to your business
        </p>
        <Link to="customize-drone" className={s.link_to_cistomize_drone}>
          Get started
        </Link>
        <div className={s.circle}></div>
      </div>
    </section>
  );
};

export default CustomizeDrone;
