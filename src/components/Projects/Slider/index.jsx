"use client"
import React, { useRef } from "react";
import Slider from "react-slick";
import { Project } from "../Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Container, Buttons } from "./SliderElements";
import { Zoom } from "react-awesome-reveal";
import { settings } from "./SliderConfiguration";

export const SliderComp = ({ data }) => {
    const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => <Project data={item} key={i} />);
    return (
        <Zoom triggerOnce>
            <Container>
                <Slider ref={arrowRef} {...settings}>
                    {sliderProject}
                </Slider>
                <Buttons>
                    <button
                        onClick={() => arrowRef.current.slickPrev()}
                        className="back"
                    >
                        <IoIosArrowBack />
                    </button>
                    <button
                        onClick={() => arrowRef.current.slickNext()}
                        className="next"
                    >
                        <IoIosArrowForward />
                    </button>
                </Buttons>
            </Container>
        </Zoom>
    );
};
