import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from './HowItWorks.module.css';
import { useDashboard } from '../../hooks/useDashboard';
import Step from './Step';

const HowItWorks = () => {
  const { isBigScreen, isLaptopOrTablet, isMobile } = useDashboard();

  const steps = [
    {
      number: 1,
      icon: 'business',
      title: 'Сhoose a drone “ready solution“ or a base model',
      text: 'Drone-LiDAR / Agriculture Drone / View-Drone',
    },
    {
      number: 2,
      icon: 'camera',
      title: 'Customize your drone or slip this step',
      text: 'Camera / battery / scanner / workstation etc.',
    },
    {
      number: 3,
      icon: 'package',
      title: 'Place your order …',
      text: 'Add the product to the cart and fill in all the necessary fields to complete the order',
    },
    {
      number: 4,
      icon: 'phone-call',
      title: 'Our manager will contact you to confirm the order',
      text: "Our manager will contact you to clarify the order, then you will receive an invoice for payment. After payment, we'll send the drone to the address you specified on the same day.",
    },
  ];

  return (
    <section className={s.section_how_it_works}>
      <h2 className={s.section_title}>how it works</h2>
      <div className={s.swiper_wrapper}>
        <Swiper
          spaceBetween={32}
          slidesPerView={isBigScreen ? 4 : 'auto'}
          slidesOffsetBefore={isMobile ? -16 : 0}
          centeredSlides={isLaptopOrTablet ? false : !isBigScreen}
        >
          {steps.map(step => (
            <SwiperSlide key={step.number} className={s.slide}>
              <Step {...step} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HowItWorks;
