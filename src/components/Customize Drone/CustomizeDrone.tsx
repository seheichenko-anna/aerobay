import { Link } from 'react-router-dom';
import s from './CustomizeDrone.module.css';
import liddarDrone from '../../assets/customize-drone/lidDAR-drone.png';
import agroDrone from '../../assets/customize-drone/agro-drone.png';
import droneViewer from '../../assets/customize-drone/viewer-drone.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import svg from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';
import CustomPagination from '../CustomPagination/CustomPagination';
import { useDashboard } from '../../hooks/useDashboard';

const CustomizeDrone = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);
  const [isLastSlide, setIsLastSlide] = useState<boolean>(false);
  const { isBigScreenOrTablet, isAllMobile, isBigScreen } = useDashboard();

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
        <div className={s.title_section_wrapper}>
          <h2 className={s.section_customize_title}>
            <span className={s.accent_color}>Customize</span> your own drone for
            your business need
          </h2>
          <p className={s.text_under_title}>
            You can choose a base drone tailored to suit your business needs
          </p>
        </div>
        {isAllMobile && (
          <>
            <Swiper
              onSwiper={setSwiper}
              spaceBetween={32}
              slidesPerGroup={1}
              slidesPerView={1}
              centeredSlides={false}
            >
              <SwiperSlide>
                <div className={s.drone_title_wrapper}>
                  <h3 className={s.drone_title}>LID Drone 200</h3>
                  <p className={s.equipment}>(basic equipment)</p>
                </div>
                <div className={`${s.drone_background} ${s.liddar_background}`}>
                  <img src={liddarDrone} className={s.drone_img} />
                </div>
                <div className={s.cost_info}>
                  <p className={s.total_cost}>Total cost: </p>
                  <p className={s.cost_value}>
                    <span>$ 500</span>
                  </p>
                  <Link to="lidar-drone" className={s.link_base_model}>
                    <span>Buy base model</span>
                    <span className={s.arrow_wrapper}>
                      <svg className={s.icon_arrow_link}>
                        <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                      </svg>
                    </span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={s.drone_title_wrapper}>
                  <h3 className={s.drone_title}>Drone Viewer 2700</h3>
                  <p className={s.equipment}>(basic equipment)</p>
                </div>
                <div className={`${s.drone_background} ${s.liddar_background}`}>
                  <img src={droneViewer} className={s.drone_img} />
                </div>
                <div className={s.cost_info}>
                  <p className={s.total_cost}>Total cost: </p>
                  <p className={s.cost_value}>
                    <span>$ 500</span>
                  </p>
                  <Link to="lidar-drone" className={s.link_base_model}>
                    <span>Buy base model</span>
                    <span className={s.arrow_wrapper}>
                      <svg className={s.icon_arrow_link}>
                        <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                      </svg>
                    </span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={s.drone_title_wrapper}>
                  <h3 className={s.drone_title}>Drone Agras 250</h3>
                  <p className={s.equipment}>(basic equipment)</p>
                </div>
                <div className={`${s.drone_background} ${s.liddar_background}`}>
                  <img src={agroDrone} className={s.drone_img} />
                </div>
                <div className={s.cost_info}>
                  <p className={s.total_cost}>Total cost: </p>
                  <p className={s.cost_value}>
                    <span>$ 800</span>
                  </p>
                  <Link to="lidar-drone" className={s.link_base_model}>
                    <span>Buy base model</span>
                    <span className={s.arrow_wrapper}>
                      <svg className={s.icon_arrow_link}>
                        <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                      </svg>
                    </span>
                  </Link>
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
          </>
        )}

        {isBigScreenOrTablet && (
          <>
            <div>
              <Swiper
                onSwiper={setSwiper}
                spaceBetween={64}
                slidesPerGroup={1}
                slidesPerView={1}
                centeredSlides={false}
              >
                <SwiperSlide>
                  <div
                    className={`${s.drone_background} ${s.liddar_background}`}
                  >
                    <div className={s.drone_title_wrapper}>
                      <h3 className={s.drone_title}>LIDDrone 200</h3>
                      <p className={s.equipment}>(basic equipment)</p>
                    </div>
                    <img src={liddarDrone} className={s.drone_img} />
                    <div className={s.cost_info}>
                      <p className={s.total_cost}>Total cost: </p>
                      <p className={s.cost_value}>
                        <span>$ 500</span>
                      </p>
                      <Link to="lidar-drone" className={s.link_base_model}>
                        <span>Buy base model</span>
                        <span className={s.arrow_wrapper}>
                          <svg className={s.icon_arrow_link}>
                            <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                          </svg>
                        </span>
                      </Link>
                    </div>
                    <div
                      className={`${isLastSlide ? s.swiper_button_prev : s.swiper_button_next} ${s.custom_swiper_next}`}
                      onClick={goNext}
                    >
                      <svg className={s.icon_arrow_prev}>
                        <use xlinkHref={`${svg}#icon-arrow-right`} />
                      </svg>
                    </div>
                    <div
                      className={`${!isFirstSlide ? s.swiper_button_next : s.swiper_button_prev} ${s.custom_swiper_prev}`}
                      onClick={goPrev}
                    >
                      <svg className={s.icon_arrow_prev}>
                        <use xlinkHref={`${svg}#icon-arrow-left`} />
                      </svg>
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
                  <div className={`${s.drone_background} ${s.agro_background}`}>
                    <div className={s.drone_title_wrapper}>
                      <h3 className={s.drone_title}>Drone Viewer 2700</h3>
                      <p className={s.equipment}>(basic equipment)</p>
                    </div>
                    <img src={droneViewer} className={s.drone_img} />
                    <div className={s.cost_info}>
                      <div className={s.cost_wrapper}>
                        <p className={s.total_cost}>Total cost: </p>
                        <p className={s.cost_value}>
                          <span>$ 500</span>
                        </p>
                      </div>
                      <Link to="lidar-drone" className={s.link_base_model}>
                        <span>Buy base model</span>
                        <span className={s.arrow_wrapper}>
                          <svg className={s.icon_arrow_link}>
                            <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                          </svg>
                        </span>
                      </Link>
                    </div>
                    <div
                      className={`${isLastSlide ? s.swiper_button_prev : s.swiper_button_next} ${s.custom_swiper_next}`}
                      onClick={goNext}
                    >
                      <svg className={s.icon_arrow_prev}>
                        <use xlinkHref={`${svg}#icon-arrow-right`} />
                      </svg>
                    </div>
                    <div
                      className={`${!isFirstSlide ? s.swiper_button_next : s.swiper_button_prev} ${s.custom_swiper_prev}`}
                      onClick={goPrev}
                    >
                      <svg className={s.icon_arrow_prev}>
                        <use xlinkHref={`${svg}#icon-arrow-left`} />
                      </svg>
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
                  <div className={`${s.drone_background} ${s.agro_background}`}>
                    <div className={s.drone_title_wrapper}>
                      <h3 className={s.drone_title}>Drone Agras 250</h3>
                      <p className={s.equipment}>(basic equipment)</p>
                    </div>
                    <img src={agroDrone} className={s.drone_img} />
                    <div className={s.cost_info}>
                      <p className={s.total_cost}>Total cost: </p>
                      <p className={s.cost_value}>
                        <span>$ 800</span>
                      </p>
                      <Link to="lidar-drone" className={s.link_base_model}>
                        <span>Buy base model</span>
                        <span className={s.arrow_wrapper}>
                          <svg className={s.icon_arrow_link}>
                            <use xlinkHref={`${svg}#icon-arrow-up-right`} />
                          </svg>
                        </span>
                      </Link>
                    </div>
                    <div
                      className={`${isLastSlide ? s.swiper_button_prev : s.swiper_button_next} ${s.custom_swiper_next}`}
                      onClick={goNext}
                    >
                      <svg className={s.icon_arrow_prev}>
                        <use xlinkHref={`${svg}#icon-arrow-right`} />
                      </svg>
                    </div>
                    <div
                      className={`${!isFirstSlide ? s.swiper_button_next : s.swiper_button_prev} ${s.custom_swiper_prev}`}
                      onClick={goPrev}
                    >
                      <svg className={s.icon_arrow_prev}>
                        <use xlinkHref={`${svg}#icon-arrow-left`} />
                      </svg>
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
            </div>
            <p className={s.text_under_swiper}>
              Or You can Customize Base Drone by <br />
              adding /deleting accessories which are more <br />
              accomplish to your business
            </p>
            <Link to="customize-drone" className={s.link_to_cistomize_drone}>
              Get started
            </Link>
            {isBigScreen && <div className={s.circle}></div>}
          </>
        )}
      </div>
    </section>
  );
};

export default CustomizeDrone;
