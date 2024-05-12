import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from './HowItWorks.module.css';
import svg from '../../assets/sprite.svg';
import { useDashboard } from '../../hooks/useDashboard';

const HowItWorks = () => {
  const { isBigScreen, isMobileOrTablet } = useDashboard();
  return (
    <section className={s.section_how_it_works}>
      <div className={s.container}>
        <h2 className={s.section_title}>how it works</h2>
        {isMobileOrTablet && (
          <div className={s.swiper_wrapper}>
            <Swiper
              spaceBetween={32}
              slidesPerGroup={1}
              slidesPerView={'auto'}
              slidesOffsetBefore={-16}
              slidesOffsetAfter={0}
              centeredSlides={true}
            >
              <SwiperSlide className={s.slide}>
                <div className={s.step_wrapper}>
                  <div className={`${s.number_wrapper} ${s.number_line}`}>
                    <div className={s.number}>
                      <p>1</p>
                    </div>
                  </div>
                  <div className={s.step}>
                    <div className={s.padding_wrapper}>
                      <div className={s.icon_step_wrapper}>
                        <svg className={s.icon_step}>
                          <use xlinkHref={`${svg}#icon-business`} />
                        </svg>
                      </div>
                    </div>
                    <h3 className={s.step_title}>
                      Chose your business or type of drone acording to your
                      business
                    </h3>
                    <p className={s.step_text}>
                      Drone-LiDAR / Agriculture Drone/ View-Drone
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={s.slide}>
                <div className={s.step_wrapper}>
                  <div className={s.number_wrapper}>
                    <div className={s.number}>
                      <p>2</p>
                    </div>
                  </div>
                  <div className={s.step}>
                    <div className={s.padding_wrapper}>
                      <div className={s.icon_step_wrapper}>
                        <svg className={s.icon_step}>
                          <use xlinkHref={`${svg}#icon-camera`} />
                        </svg>
                      </div>
                    </div>
                    <h3 className={s.step_title}>
                      Add accessories that you need
                    </h3>
                    <p className={s.step_text}>
                      Camera/battery/scanner/ workstation etc.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={s.slide}>
                <div className={s.step_wrapper}>
                  <div className={s.number_wrapper}>
                    <div className={s.number}>
                      <p>3</p>
                    </div>
                  </div>
                  <div className={s.step}>
                    <div className={s.padding_wrapper}>
                      <div className={s.icon_step_wrapper}>
                        <svg className={s.icon_step}>
                          <use xlinkHref={`${svg}#icon-package`} />
                        </svg>
                      </div>
                    </div>
                    <h3 className={s.step_title}>Make your order</h3>
                    <p className={s.step_text}>
                      add the product to the cart and fill in all the necessary
                      fields to complete the order
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={s.slide}>
                <div className={s.step_wrapper}>
                  <div className={s.number_wrapper}>
                    <div className={s.number}>
                      <p>4</p>
                    </div>
                  </div>
                  <div className={s.step}>
                    <div className={s.padding_wrapper}>
                      <div className={s.icon_step_wrapper}>
                        <svg className={s.icon_step}>
                          <use xlinkHref={`${svg}#icon-phone-call`} />
                        </svg>
                      </div>
                    </div>
                    <h3 className={s.step_title}>
                      The manager will contact you
                    </h3>
                    <p className={s.step_text}>
                      Our manager will contact you to clarify the order, then
                      you will receive an invoice for payment. After payment,
                      we'll send the drone to the address you specified on the
                      same day.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        {isBigScreen && (
          <ul className={s.steps_list}>
            <li>
              <div className={s.step_wrapper}>
                <div className={`${s.number_wrapper} ${s.number_line}`}>
                  <div className={s.number}>
                    <p>1</p>
                  </div>
                </div>
                <div className={s.step}>
                  <div className={s.padding_wrapper}>
                    <div className={s.icon_step_wrapper}>
                      <svg className={s.icon_step}>
                        <use xlinkHref={`${svg}#icon-business`} />
                      </svg>
                    </div>
                  </div>
                  <h3 className={s.step_title}>
                    Chose your business or type of drone acording to your
                    business
                  </h3>
                  <p className={s.step_text}>
                    Drone-LiDAR / Agriculture Drone/ View-Drone
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={s.step_wrapper}>
                <div className={s.number_wrapper}>
                  <div className={s.number}>
                    <p>2</p>
                  </div>
                </div>
                <div className={s.step}>
                  <div className={s.padding_wrapper}>
                    <div className={s.icon_step_wrapper}>
                      <svg className={s.icon_step}>
                        <use xlinkHref={`${svg}#icon-camera`} />
                      </svg>
                    </div>
                  </div>
                  <h3 className={s.step_title}>
                    Add accessories that you need
                  </h3>
                  <p className={s.step_text}>
                    Camera/battery/scanner/ workstation etc.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={s.step_wrapper}>
                <div className={s.number_wrapper}>
                  <div className={s.number}>
                    <p>3</p>
                  </div>
                </div>
                <div className={s.step}>
                  <div className={s.padding_wrapper}>
                    <div className={s.icon_step_wrapper}>
                      <svg className={s.icon_step}>
                        <use xlinkHref={`${svg}#icon-package`} />
                      </svg>
                    </div>
                  </div>
                  <h3 className={s.step_title}>Make your order</h3>
                  <p className={s.step_text}>
                    add the product to the cart and fill in all the necessary
                    fields to complete the order
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={s.step_wrapper}>
                <div className={s.number_wrapper}>
                  <div className={s.number}>
                    <p>4</p>
                  </div>
                </div>
                <div className={s.step}>
                  <div className={s.padding_wrapper}>
                    <div className={s.icon_step_wrapper}>
                      <svg className={s.icon_step}>
                        <use xlinkHref={`${svg}#icon-phone-call`} />
                      </svg>
                    </div>
                  </div>
                  <h3 className={s.step_title}>The manager will contact you</h3>
                  <p className={s.step_text}>
                    Our manager will contact you to clarify the order, then you
                    will receive an invoice for payment. After payment, we'll
                    send the drone to the address you specified on the same day.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
