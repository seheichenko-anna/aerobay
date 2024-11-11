import s from './DroneShowcase.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import stcViewer from './videos/DJI AVATA 2 - The FPV drone without limits _ Cinematic trailer.mp4';
import srcLiDAR from './videos/Meet DJI Matrice 350 RTK.mp4';
import { MdArrowOutward } from 'react-icons/md';
import './swiperStylesDroneShowCase.css';
import { useDashboard } from '../../hooks/useDashboard';
import { useState } from 'react';

const DroneShowcase = () => {
  const { isBigScreen } = useDashboard();
  const [swiper, setSwiper] = useState<any>(null);

  const updatePagination = (index: number) => {
    const bullets = document.querySelectorAll(
      '.swiper_pagination_bullet_showcase_drone'
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
    <section className={s.droneShowcase}>
      <Swiper
        onSwiper={setSwiper}
        className={s.swiper}
        spaceBetween={50}
        slidesPerView={1}
        autoHeight={true}
        centeredSlides
        pagination={{
          clickable: true,
          el: '.swiper_pagination_drone_showcase',
          type: 'bullets',
          bulletClass: `swiper-pagination-bullet swiper_pagination_bullet_showcase_drone`,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className={s.slide}>
          <div tabIndex={0} onFocus={() => handleFocus(0)}>
            <video
              src="https://rcpro.pl/data/include/cms/enterprise/Agras-T30/DJI-Enterprise-Agras-T30-baner.mp4"
              loop
              muted
              autoPlay
              className={s.video}
            />
            <article className={s.infoContainer}>
              <div className={s.infoBlock}>
                <div className={s.priceContainer}>
                  <p className={s.price}>
                    <span>800$ /</span>
                    <span className={s.product}>product</span>
                  </p>
                  <Link to="agriculture-drone" className={s.learnMoreButton}>
                    Learn more
                    <span className={s.arrow}>
                      <MdArrowOutward size={20} />
                    </span>
                  </Link>
                </div>
                <h1 className={s.title}>Agriculture drone</h1>
                <p className={s.description}>
                  For crop monitoring, livestock management, and more. Maximize
                  productivity and optimize farming practices.
                </p>
              </div>
              {isBigScreen && (
                <aside className={s.specifications}>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Can carry up to</h5>
                    <p className={s.specValue}>50 kg</p>
                  </div>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Battery swapping</h5>
                    <p className={s.specValue}>13+/ hours</p>
                  </div>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Single flight</h5>
                    <p className={s.specValue}>205 mi/ 329 km*</p>
                  </div>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Access data</h5>
                    <p className={s.specValue}>in a real time</p>
                  </div>
                </aside>
              )}
            </article>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div tabIndex={0} onFocus={() => handleFocus(1)}>
            <video src={srcLiDAR} loop muted autoPlay className={s.video} />
            <article className={s.infoContainer}>
              <div className={s.infoBlock}>
                <div className={s.priceContainer}>
                  <p className={s.price}>
                    <span>800$ /</span>{' '}
                    <span className={s.product}>product</span>
                  </p>
                  <Link to="lidar-drone" className={s.learnMoreButton}>
                    Learn more
                    <span className={s.arrow}>
                      <MdArrowOutward size={20} />
                    </span>
                  </Link>
                </div>
                <h1 className={s.title}>Liddar drone</h1>
                <p className={s.description}>
                  Precise and detailed data collection for landscape analysis
                  and infrastructure surveys. Optimize processes with advanced
                  laser scanning technology.
                </p>
              </div>
              {isBigScreen && (
                <aside className={s.specifications}>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Can carry up to</h5>
                    <p className={s.specValue}>50 kg</p>
                  </div>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Battery swapping</h5>
                    <p className={s.specValue}>13+/ hours</p>
                  </div>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Single flight</h5>
                    <p className={s.specValue}>205 mi/ 329 km*</p>
                  </div>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Access data</h5>
                    <p className={s.specValue}>in a real time</p>
                  </div>
                </aside>
              )}
            </article>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div tabIndex={0} onFocus={() => handleFocus(2)}>
            <video
              src={stcViewer}
              // width='100%'
              loop
              muted
              autoPlay
              className={s.video}
            />
            <article className={s.infoContainer}>
              <div className={s.infoBlock}>
                <div className={s.priceContainer}>
                  <p className={s.price}>
                    <span>800$ /</span>
                    <span className={s.product}>product</span>
                  </p>
                  <Link to="drone-viewer" className={s.learnMoreButton}>
                    Learn more
                    <span className={s.arrow}>
                      <MdArrowOutward size={20} />
                    </span>
                  </Link>
                </div>
                <h1 className={s.title}>Drone viewer</h1>
                <p className={s.description}>
                  For high-quality imaging and real-time analysis. View data
                  from multiple angles and gain full control over your
                  monitoring process.
                </p>
              </div>
              {isBigScreen && (
                <aside className={s.specifications}>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Can carry up to</h5>
                    <p className={s.specValue}>50 kg</p>
                  </div>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Battery swapping</h5>
                    <p className={s.specValue}>13+/ hours</p>
                  </div>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Single flight</h5>
                    <p className={s.specValue}>205 mi/ 329 km*</p>
                  </div>
                  <div className={s.specificationItem}>
                    <h5 className={s.specTitle}>Access data</h5>
                    <p className={s.specValue}>in a real time</p>
                  </div>
                </aside>
              )}
            </article>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper_pagination_drone_showcase"></div>
    </section>
  );
};

export default DroneShowcase;
