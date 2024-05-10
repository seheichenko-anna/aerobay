import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <section className={s.section_how_it_works}>
      <h2 className={s.section_title}>how it works</h2>
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
                <h3>
                  Chose your business or type of drone acording to your business
                </h3>
                <p>Drone-LiDAR / Agriculture Drone/ View-Drone</p>
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
                <h3>Add accessories that you need</h3>
                <p>camera/battery/scanner/workstation etc.</p>
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
                <h3>Make your order</h3>
                <p>
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
                <h3>The manager will contact you</h3>
                <p>
                  Our manager will contact you to clarify the order, then you
                  will receive an invoice for payment. After payment, we'll send
                  the drone to the address you specified on the same day.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HowItWorks;
