import React, { useRef } from "react";
import Slider from "react-slick";
import { Container, Testimonials, Buttons } from "./TestimonialElements";
import { TestimomnialsSlider } from "@/src/components/Testimonials/Slider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";
import { useSelector } from "react-redux";

let testimonials = [
    {
        name: "testimonials.testimonial1.name",
        position: "testimonials.testimonial1.position",
        img_url:
            "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 3,
        description: `testimonials.testimonial1.description`,
    },
    {
        name: "testimonials.testimonial2.name",
        position: "testimonials.testimonial2.position",
        img_url:
            "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 4,
        description: `testimonials.testimonial2.description`,
    },
    {
        name: "testimonials.testimonial3.name",
        position: "testimonials.testimonial3.position",
        img_url:
            "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 4,
        description: `testimonials.testimonial3.description`,
    },
    {
        name: "testimonials.testimonial4.name",
        position: "testimonials.testimonial4.position",
        img_url:
            "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 4,
        description: `testimonials.testimonial4.description`,
    },
    {
        name: "testimonials.testimonial5.name",
        position: "testimonials.testimonial5.position",
        img_url:
            "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 4,
        description: `testimonials.testimonial5.description`,
    },
    {
        name: "testimonials.testimonial6.name",
        position: "testimonials.testimonial6.position",
        img_url:
            "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 4,
        description: `testimonials.testimonial6.description`,
    }
];
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
    let testimonialsContent = "";
    testimonialsContent = testimonials.map((item, i) => (
        <TestimomnialsSlider item={item} key={i} />
    ));
    return (
        <Container id="testimonial" theme={theme}>
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
