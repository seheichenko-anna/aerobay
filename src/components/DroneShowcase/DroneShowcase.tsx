import React, { useEffect, useState } from 'react'
import s from './DroneShowcase.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CustomPagination from '../CustomPagination/CustomPagination';
import { Link } from 'react-router-dom';
import stcViewer from './videos/DJI AVATA 2 - The FPV drone without limits _ Cinematic trailer.mp4'
import srcLiDAR from './videos/Meet DJI Matrice 350 RTK.mp4'
import { MdArrowOutward } from "react-icons/md";


const DroneShowcase = () => {

    const [mySlider, setMySlider] = useState<any>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (mySlider) {
            mySlider.on('slideChange', () => {
                setCurrentIndex(mySlider.realIndex);
            });
        }
    }, [mySlider]);


    const goToSlide = (index: number) => {
        if (mySlider) {
            mySlider.slideTo(index);
        }
    };

    return (
        <div className={s.droneShowcase}>
            <Swiper
                onSwiper={setMySlider}
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <video src='https://rcpro.pl/data/include/cms/enterprise/Agras-T30/DJI-Enterprise-Agras-T30-baner.mp4'
                        loop muted autoPlay
                        className={s.video}
                    />
                    <article className={s.infoContainer}>
                        <div className={s.infoBlock}>
                            <div className={s.priceContainer}>
                                <p className={s.price}>800$ /<span className={s.product}>product</span></p>
                                <Link to="lidar-drone">
                                    <button className={s.learnMoreButton}>Learn more<span><MdArrowOutward size={20} /></span></button>
                                </Link>
                            </div>
                            <h1 className={s.title}>Agriculture drone</h1>
                            <p className={s.description}>For crop monitoring, livestock management, and more. Maximize productivity and optimize farming practices.</p>
                        </div>
                        <aside className={s.specifications}>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Can carry up to</h5>
                                <p className={s.specValue}>50 kg</p>
                            </div>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Battery swapping</h5>
                                <p className={s.specValue}>13+/ hours</p></div>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Single flight</h5>
                                <p className={s.specValue}>205 mi/ 329 km*</p></div>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Access data</h5>
                                <p className={s.specValue}>in a real time</p></div>
                        </aside >
                    </article >

                    <nav className={`${s.pagination} ${s.position}`}>
                        <CustomPagination
                            activeIndex={currentIndex}
                            goToSlide={goToSlide}
                        />
                    </nav >
                </SwiperSlide>
                <SwiperSlide>
                    <video src={srcLiDAR}
                        loop muted autoPlay
                        className={s.video}
                    />
                    <article className={s.infoContainer}>
                        <div className={s.infoBlock}>
                            <div className={s.priceContainer}>
                                <p className={s.price}>800$ /<span className={s.product}>product</span></p>
                                <Link to="agriculture-drone">
                                    <button className={s.learnMoreButton}>Learn more<span><MdArrowOutward size={20} /></span></button>
                                </Link>
                            </div>
                            <h1 className={s.title}>Agriculture drone</h1>
                            <p className={s.description}>For crop monitoring, livestock management, and more. Maximize productivity and optimize farming practices.</p>
                        </div>
                        <aside className={s.specifications}>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Can carry up to</h5>
                                <p className={s.specValue}>50 kg</p>
                            </div>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Battery swapping</h5>
                                <p className={s.specValue}>13+/ hours</p></div>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Single flight</h5>
                                <p className={s.specValue}>205 mi/ 329 km*</p></div>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Access data</h5>
                                <p className={s.specValue}>in a real time</p></div>
                        </aside >
                    </article >

                    <nav className={`${s.pagination} ${s.position}`}>
                        <CustomPagination
                            activeIndex={currentIndex}
                            goToSlide={goToSlide}
                        />
                    </nav >
                </SwiperSlide>
                <SwiperSlide>
                    <video src={stcViewer}
                        // width='100%'
                        loop muted autoPlay
                        className={s.video}
                    />
                    <article className={s.infoContainer}>
                        <div className={s.infoBlock}>
                            <div className={s.priceContainer}>
                                <p className={s.price}>800$ /<span className={s.product}>product</span></p>
                                <Link to="drone-viewer">
                                    <button className={s.learnMoreButton}>Learn more<span><MdArrowOutward size={20} /></span></button>
                                </Link>
                            </div>
                            <h1 className={s.title}>Agriculture drone</h1>
                            <p className={s.description}>For crop monitoring, livestock management, and more. Maximize productivity and optimize farming practices.</p>
                        </div>
                        <aside className={s.specifications}>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Can carry up to</h5>
                                <p className={s.specValue}>50 kg</p>
                            </div>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Battery swapping</h5>
                                <p className={s.specValue}>13+/ hours</p></div>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Single flight</h5>
                                <p className={s.specValue}>205 mi/ 329 km*</p></div>
                            <div className={s.specificationItem}>
                                <h5 className={s.specTitle}>Access data</h5>
                                <p className={s.specValue}>in a real time</p></div>
                        </aside >
                    </article >

                    <nav className={`${s.pagination} ${s.position}`}>
                        <CustomPagination
                            activeIndex={currentIndex}
                            goToSlide={goToSlide}
                        />
                    </nav >
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default DroneShowcase
