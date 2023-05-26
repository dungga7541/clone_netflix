import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
//Swiper Slider
import "./Slider.scss"
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const Slider = () => {
    const [slider, setSlider] = useState([]);
    const axiosInstance = axios.create
    ({
        baseURL: process.env.REACT_APP_API_URL,
    });
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axiosInstance.get("movies/", {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                    },
                });
                setSlider(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomContent();
    }, []);

    const navigate = useNavigate();
    const clicktowatch = (id) => {
        try {
            axiosInstance.get("movies/find/" + id, {
                headers: {
                    token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                },
            }).then((res) => {
                navigate('/watch', { state: { query: res.data.video } })
            })
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className='slider'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 9000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {slider.map((index, idx) => {
                    return (
                        <SwiperSlide key={idx} >
                            <img src={index.img} alt="" />
                            <div className="container">
                                <div className="content">
                                    <h1>{index.title}</h1>
                                    <p>{index.desc}</p>
                                    <div className='btnWatch'>
                                        <div className='buttons'>
                                            <button className='playBtn'><PlayArrowIcon /> Xem Phim </button>
                                            <button className='addWatchLater'><PlaylistAddIcon /> Thêm vào xem sau</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                
            </Swiper >
        </div >
    )
}

export default Slider;