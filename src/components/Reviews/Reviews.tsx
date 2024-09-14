import s from './Reviews.module.css';
import srcVideo from './CosmosVideo.mp4';
import { useState } from 'react';
import { LuArrowRight, LuArrowLeft } from 'react-icons/lu';
import { useDashboard } from '../../hooks/useDashboard';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isBigScreen, isBigScreenOrTablet } = useDashboard();
  const reviews = [
    {
      name: 'John Smith',
      review: (
        <>
          <p>
            The Lidar drone exceeded my expectations! Its precision and accuracy
            are unmatched, making it ideal for mapping terrains and conducting
            topographic surveys.
          </p>
          <br />
          <p>
            The data it provides is invaluable for urban planning and
            environmental monitoring. Highly recommended for professionals in
            the field.
          </p>
        </>
      ),
      drone: 'LiDAR research',
      date: '01.01.2024',
    },
    {
      name: 'Max Walker',
      review:
        'The thermal imaging camera surpassed my expectations! Its clarity and detail are unparalleled, making it perfect for detecting heat signatures and identifying potential issues. The insights it offers are indispensable for security operations and wildlife monitoring. Highly recommended for professionals seeking advanced surveillance capabilities.',
      drone: 'Camera',
      date: '01.01.2024',
    },
    {
      name: 'Oliver Grant',
      review:
        "The drone scanner is a game-changer in aerial data collection. Its high-resolution capabilities allow for precise mapping and analysis, making it invaluable for industries like construction, agriculture, and environmental monitoring. Easy to integrate and use, it's a must-have tool for professionals seeking accurate, real-time insights.",
      drone: 'Scanner',
      date: '01.01.2024',
    },
  ];

  const nextReviews = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReviews = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={s.reviewsSection}>
      <div className={s.reviewBlock}>
        <div>
          <h5 className={s.rewiews}>Rewiews</h5>
          <h2 className={s.title}>What our client says</h2>
        </div>
        <div className={s.reviewContent}>
          <div className={s.reviewText}>
            <div>
              <h4 className={s.author}>{reviews[currentIndex].name}</h4>
              <p className={s.reviewBody}>{reviews[currentIndex].review}</p>
            </div>
            <div className={s.locationAndDateWrapper}>
              <p className={s.location}>Sydney, Australia</p>
              <p className={s.date}>{reviews[currentIndex].date}</p>
            </div>
          </div>
          <div className={s.videoPlayer}>
            <video src={srcVideo} loop muted autoPlay className={s.video} />
            {isBigScreenOrTablet && (
              <p className={s.droneName}>{reviews[currentIndex].drone}</p>
            )}
          </div>
        </div>

        <div
          className={
            isBigScreen
              ? `${s.navigationButtons} ${s.desktop}`
              : s.navigationButtons
          }
        >
          <span className={s.reviewCounter}>
            {currentIndex === 0 ? 1 : currentIndex + 1}/{reviews.length}
          </span>
          <button
            className={
              currentIndex !== 0 ? `${s.activeButton} ${s.button}` : s.button
            }
            onClick={prevReviews}
            disabled={currentIndex === 0}
          >
            <LuArrowLeft size={20} />
          </button>
          <button
            className={
              currentIndex !== reviews.length - 1
                ? `${s.activeButton} ${s.button}`
                : s.button
            }
            onClick={nextReviews}
            disabled={currentIndex === reviews.length - 1}
          >
            <LuArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
