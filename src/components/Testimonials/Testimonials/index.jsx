import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { Container, Testimonials, Buttons } from "./TestimonialsElements";
import { TestimomnialsSlider } from "@/src/components/Testimonials/Slider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";
import { useSelector } from "react-redux";
import axios from 'axios';

const getTestimonials = async () => {
    try {
        let apiUrl;

        if (process.env.NODE_ENV === process.env.NEXT_PUBLIC_ENV_PRODUCTION) {
            apiUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;
        } else {
            apiUrl = process.env.NEXT_PUBLIC_LOCAL_URL;
        }

        const response = await axios.get(`${apiUrl}/api/testimonials`, {
            headers: {
                'Cache-Control': 'no-store',
            },
        });

        if (response.status !== 200) {
            throw new Error("Something went wrong while fetching testimonials data");
        }

        return response.data;
    } catch (error) {
        console.error(error);
    }
};

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export const TestimonialsComp = () => {
    const { t } = useTranslation();
    const arrowRef = useRef(null);
    const theme = useSelector(selectTheme);
    const [testimonials, setTestimonials] = useState([]);
    let testimonialsContent = "";

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const { testimonials } = await getTestimonials();
                setTestimonials(testimonials);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTestimonials();
    }, []);

    testimonialsContent = testimonials.map((item, i) => (
        <TestimomnialsSlider item={item} key={i} />
    ));

    return (
        <Container id="testimonials" theme={theme}>
            <Slide direction="left" triggerOnce>
                <span className="green">{t("testimonials.title")}</span>
                <h1>{t('testimonials.titleComplement')}</h1>
            </Slide>
            <Slide direction="right" triggerOnce>
                <Testimonials>
                    <Slider ref={arrowRef} {...settings}>
                        {testimonialsContent}
                    </Slider>
                    <Buttons>
                        <button onClick={() => arrowRef.current.slickPrev()}>
                            <IoIosArrowBack />
                        </button>
                        <button onClick={() => arrowRef.current.slickNext()}>
                            <IoIosArrowForward />
                        </button>
                    </Buttons>
                </Testimonials>
            </Slide>
        </Container>
    );
};
