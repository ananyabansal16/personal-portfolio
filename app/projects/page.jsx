"use client";

import { motion, px } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "full-stack",
        title: "E-KYC Portal",
        description: "A full-stack web application that allows users to verify their identity and access restricted content for IFCO-Tokio General Insurance Co. Ltd. thus enhancing efficiency and customer satisfaction.",
        stack: [
            { name: "Springboot" }, { name: "Java" }, { name: "Angular" }, { name: "Gradle" }, { name: "REST" }, { name: "Postman" },
        ],
        image: "/assets/work/ekyc.png",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "web-scraper",
        title: "Keyword-Question Scraper",
        description: "Gets the desired number of questions asked by people on the web on any website and for any keyword and stored it in a google sheet and gives an AI generated answer to it.",
        stack: [
            { name: "Selenium" }, { name: "BeautifulSoup" }, { name: "Python" }, { name: "GoogleAPIs" }, { name: "OpenAI" },
        ],
        image: "/assets/work/webscraper.png",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "deep learning",
        title: "Bijuka-Bot",
        description: "Build to help farmers identify their crop disease and take action immediately without affecting their yield and saving money on expensive lab tests by their image with an accuracy of 93%",
        stack: [
            { name: "Python" }, { name: "Colab" }, { name: "ResNet50" },
        ],
        image: "/assets/work/bijuka.png",
        live: "",
        github: "https://github.com/ananyabansal16/Bijuka-1",
    },
    {
        num: "04",
        category: "app development",
        title: "a Shopping App",
        description: "Developed a robust shopping app, seamlessly combining an intuitive user interface with efficient functionality.",
        stack: [
            { name: "Flutter" }, { name: "Dart" }, { name: "Android Studio" },
        ],
        image: "/assets/work/shopapp.png",
        live: "",
        github: "",
    },
    {
        num: "05",
        category: "Machine Learning",
        title: "SIH'23: Matsya Portal",
        description: "A flood-relief portal that displays projection of the extent of inundation in the nearby water body corresponding to the forecasts of flood levels in a river and raising alarms if the level rises above normal level with an accuracy of 91.95%.",
        stack: [
            { name: "Google Earth Engine" }, { name: "ML4Floods Module" }, { name: "LSTM" },
        ],
        image: "/assets/work/matsya.png",
        live: "",
        github: "",
    },
    {
        num: "06",
        category: "UI designs",
        title: "Designs",
        description: "Websites and Mobile UI designs Myntra's Hackerramp WeForSHe 2024 competition, showcasing 3 ideas: A web extension, swipe-based recommendation system and personal Avatar for Myntra users.",
        stack: [
            { name: "Figma" },
        ],
        image: "/assets/work/ui.png",
        live: "",
        github: "",
    },
    {
        num: "07",
        category: "Graphic designs",
        title: "Designs",
        description: "T-Shirt, Poster and Flex designs for societies and competitions",
        stack: [
            { name: "Adobe Photoshop" },
        ],
        image: "/assets/work/tshirt.png",
        live: "",
        github: "",
    },
    // {
    //     num: "08",
    //     category: "Arduino, hardware",
    //     title: "Arduino-Uno driven buggy: RoboCar’",
    //     description: "Embedding intelligent program as combination hardware and software in Robotic buggy capable of autonomous parking, gantry detection, and precise line following.",
    //     stack: [
    //         { name: "Arduino" }, { name: "Microprocessors" }, { name: "Sensors" },
    //     ],
    //     image: "/assets/work/thumb2.png",
    //     live: "",
    //     github: "",
    // },

];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1, transition:{
                duration: 0.4,
                delay: 2.4,
                ease: "easeIn"
            }}} 
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        > 
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[45%] xl-h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">

                            {/* outline */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            {/* project category */}
                            <h2 className="text-[42px] font-bold text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>

                            {/* project description */}
                            <p className="text-white/60">
                                {project.description}
                            </p>

                            {/* stack */}
                            <ul className="flex gap-3">
                                {project.stack.map((item, index)=> {
                                    return (
                                        <li key={index} className="text-md text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* border */}
                            <div className="border border-white/20"></div>

                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                            </div>

                        </div>
                    </div>
                    <div className="w-full xl:w-[55%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image 
                                                    src={project.image} 
                                                    fill
                                                    className="object-cover" 
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}

                            {/* slider buttons */}
                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[34px] h-[34px] flex justify-center items-center transition-all"
                            />

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;