import s from "./Reviews.module.css";
import srcVideo from './CosmosVideo.mp4'
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";

const Reviews = () => {

    return (
        <div className={s.container}>
            <div className={s.blockText}>
                <div>
                    <div>
                        <h5 className={s.rewiews}>Rewiews</h5>
                        <h2 className={s.title}>What our client says</h2>
                    </div>
                    <div className={s.buttonBlock}>
                        <span>1/10</span>
                        <button
                            className={
                                s.button
                            }
                        ><LuArrowLeft size={20} /></button>
                        <button
                            className={
                                s.button
                            }
                        ><LuArrowRight size={20} /></button>
                    </div>

                </div>
                <div className={s.videoBlock}>
                    <div className={s.videoBlock_text}>
                        <h4 className={s.name}>John Smith</h4>
                        <p className={s.reviewText}>
                            "The Lidar drone exceeded my expectations! Its precision and accuracy are unmatched, making it ideal for mapping terrains and conducting topographic surveys.
                            <br />
                            The data it provides is invaluable for urban planning and environmental monitoring. Highly recommended for professionals in the field."
                        </p>
                        <p className={s.city}>Sydney, Australia</p>
                    </div>
                    <div className={s.videoBlock_video} >
                        <video src={srcVideo} loop muted autoPlay className={s.videoBox} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Reviews