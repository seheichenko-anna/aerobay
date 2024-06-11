import s from "./Reviews.module.css";
import srcVideo from './CosmosVideo.mp4'
import { useState } from "react";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import useScreenSize from '../../hooks/useScreenSize';

  
const Reviews = () => {
    const screenSize = useScreenSize();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [leftButtonClicked, setLeftButtonClicked] = useState(false);
    const [rightButtonClicked, setRightButtonClicked] = useState(true);

    const reviews = [
        {
            name: "John Smith", review: (
                <>
                    <p>
                        The Lidar drone exceeded my expectations! Its precision and accuracy are unmatched, making it ideal for mapping terrains and conducting topographic surveys.
                    </p>
                    <br />
                    <p>
                        The data it provides is invaluable for urban planning and environmental monitoring. Highly recommended for professionals in the field.
                    </p>
                </>
            )
        },
        { name: "Max Walker", review: "The thermal imaging camera surpassed my expectations! Its clarity and detail are unparalleled, making it perfect for detecting heat signatures and identifying potential issues. The insights it offers are indispensable for security operations and wildlife monitoring. Highly recommended for professionals seeking advanced surveillance capabilities." },
        { name: "Oliver Grant", review: "The 3D printer exceeded my expectations! Its speed and precision are unmatched, making it perfect for rapid prototyping and manufacturing complex designs. The versatility it offers is invaluable for engineers and designers alike. Highly recommended for professionals seeking cutting-edge technology in additive manufacturing." }
    ];

    const nextReviews = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
        setLeftButtonClicked(false)
        setRightButtonClicked(true)
    };

    const prevReviews = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
        setLeftButtonClicked(true)
        setRightButtonClicked(false)
    };

    return (
        <div className={s.container}>
            <div className={s.reviewBlock}>
                <div>
                    <div>
                        <h5 className={s.rewiews}>{screenSize.width <= 375 ? "Testimonials" : 'Rewiews'}</h5>
                        <h2 className={s.title}>What our client says</h2>
                    </div>

                    {screenSize.width <= 845
                        ? null
                        : <div className={s.navigationButtons}>
                            <span className={s.reviewCounter}>{currentIndex === 0 ? 1 : currentIndex + 1}/{reviews.length}</span>
                            <button
                                className={
                                    leftButtonClicked ? `${s.activeButton} ${s.button}` : s.button
                                }
                                onClick={prevReviews}><LuArrowLeft size={20} /></button>
                            <button
                                className={
                                    rightButtonClicked ? `${s.activeButton} ${s.button}` : s.button
                                }
                                onClick={nextReviews}><LuArrowRight size={20} /></button>
                        </div>
                    }
                </div>
                <div className={s.reviewContent}>
                    <div className={s.reviewText}>
                        <h4 className={s.author}>{reviews[currentIndex].name}</h4>
                        <p className={s.reviewBody}>
                            {reviews[currentIndex].review}
                        </p>
                        <p className={s.location}>Sydney, Australia</p>
                    </div>
                    <div className={s.videoPlayer} >
                        <video src={srcVideo} loop muted autoPlay className={s.video} />
                    </div>
                </div>

                {screenSize.width <= 845
                    ? <div className={s.navigationButtons}>
                        <span className={s.reviewCounter}>{currentIndex === 0 ? 1 : currentIndex + 1}/{reviews.length}</span>
                        <button
                            className={
                                leftButtonClicked ? `${s.activeButton} ${s.button}` : s.button
                            }
                            onClick={prevReviews}><LuArrowLeft size={20} /></button>
                        <button
                            className={
                                rightButtonClicked ? `${s.activeButton} ${s.button}` : s.button
                            }
                            onClick={nextReviews}><LuArrowRight size={20} /></button>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default Reviews