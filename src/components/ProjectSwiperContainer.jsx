import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import todoListImg from '../assets/todoListImg.jpg';
import passwordGenImg from '../assets/passwordGenImg.jpg';
import epl from "../assets/epl.jpg";
import news from "../assets/news.png";
import add from "../assets/add.jpg"
// import musicPlayerImg from '../assets/musicPlayerImg.jpg'
import ProjectCard from './ProjectCard';
import useWindowSize from "./window_size"; // Import the custom hook
import CardBox from "./cardBox";
import { motion } from "framer-motion";

const SwiperContainer = () => {
    const size = useWindowSize();

    return (
        <div className="container mx-auto p-6">
            {size.width < 768 ? (
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000, // Time interval between slides in milliseconds
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    <SwiperSlide className="flex justify-center">
                        <CardBox height="400px" width="350px">
                            <div>
                                <ProjectCard
                                    title="Todo List"
                                    description="React App with Local Storage"
                                    githubLink="https://github.com/Puzzling762/React_notes/tree/master/10todo"
                                    websiteLink="https://niraj-kr-29.github.io/todoList/"
                                    image={todoListImg}
                                />
                            </div>
                        </CardBox>
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center">
                        <CardBox height="400px" width="350px">
                            <div>
                                <ProjectCard
                                    title="Password Generator"
                                    description="React App"
                                    githubLink="https://github.com/Puzzling762/React_notes/tree/master/Password_generator"
                                    websiteLink="https://niraj-kr-29.github.io/passwordGenerator/"
                                    image={passwordGenImg}
                                />
                            </div>
                        </CardBox>
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center">
                        <CardBox height="400px" width="350px">
                            <div>
                                <ProjectCard
                                    title="News Website"
                                    description="Front End basic news website"
                                    githubLink="https://github.com/Puzzling762/News_wesbite"
                                    websiteLink=""
                                    image={news}
                                />
                            </div>
                        </CardBox>
                    </SwiperSlide>
                </Swiper>
            ) : (
                <div>
                    <div className="overflow-x-auto whitespace-nowrap">
                        <div className="flex pb-5 gap-0 md:justify-evenly p-3">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -200 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.5 },
                                }}
                                className="hover:scale-105 transition-all"
                            >
                                <CardBox height="400px" width="350px">
                                    <div>
                                        <ProjectCard
                                            title="Todo List"
                                            description="React App with Local Storage"
                                            githubLink="https://github.com/Niraj-Kr-29/todoList"
                                            websiteLink="https://niraj-kr-29.github.io/todoList/"
                                            image={todoListImg}
                                        />
                                    </div>
                                </CardBox>
                            </motion.div>

                            <motion.div
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: -200 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.5 },
                                }}
                                className="hover:scale-105 transition-all"
                            >
                                <CardBox height="400px" width="350px">
                                    <div>
                                        <ProjectCard
                                            title="News Website"
                                            description="Front End basic news website"
                                            githubLink="https://github.com/Puzzling762/News_wesbite"
                                            websiteLink=""
                                            image={news}
                                        />
                                    </div>
                                </CardBox>
                            </motion.div>

                            

                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 200 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.5 },
                                }}
                                className="hover:scale-105 transition-all"
                            >
                                <CardBox height="400px" width="350px">
                                    <div>
                                        <ProjectCard
                                            title="Password Generator"
                                            description="React App"
                                            githubLink="https://github.com/Niraj-Kr-29/passwordGenerator"
                                            websiteLink="https://niraj-kr-29.github.io/passwordGenerator/"
                                            image={passwordGenImg}
                                        />
                                    </div>
                                </CardBox>
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.5 },
                            }}
                            className="hover:scale-105 transition-all"
                        >
                            <CardBox height="400px" width="350px">
                                <div>
                                    <ProjectCard
                                        title="EPL points Predictor"
                                        description="ML based project"
                                        githubLink="https://github.com/Puzzling762/ML-projects"
                                        websiteLink="/"
                                        image={epl}
                                    />
                                </div>
                            </CardBox>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.5 },
                            }}
                            className="hover:scale-105 transition-all"
                        >
                            <CardBox height="400px" width="350px">
                                <div>
                                    <ProjectCard
                                        title="Advertising Sales project"
                                        description="ML based project"
                                        githubLink="https://github.com/Puzzling762/Advertising-Sales"
                                        websiteLink="/"
                                        image={add}
                                    />
                                </div>
                            </CardBox>
                        </motion.div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default SwiperContainer;