import React from "react";
import { Container, Header, Body, Footer } from "./TestimonialsSliderElements";
import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { selectTheme } from "@/src/redux/slices/theme/ThemeSlice";
import { useSelector } from "react-redux";

export const TestimomnialsSlider = (props) => {
    const { name, position, img_url, stars, description } = props.item;
    const { t } = useTranslation();
    const theme = useSelector(selectTheme);

    return (
        <Container theme={theme}>
            <Header>
                <span className="quote">
                    <IoIosQuote />
                </span>
                <div>
                    {Array(stars)
                        .fill()
                        .map((_, i) => (
                            <span className="star" key={i}>
                                <AiOutlineStar />
                            </span>
                        ))}
                </div>
            </Header>
            <Body>{t(`${description}`)}</Body>
            <Footer>
                <img src={img_url} alt={t(`${name}`)} />
                <div className="details">
                    <h1>{t(`${name}`)}</h1>
                    <p>{t(`${position}`)}</p>
                </div>
            </Footer>
        </Container>
    );
};
