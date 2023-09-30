import React from "react";
import { Container, Header, Body, Footer } from "./TestimonialsSliderElements";
import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { selectTheme } from "@/app/GlobalRedux/Features/ThemeSlice";
import { useSelector } from "react-redux";

export const TestimomnialsSlider = (props) => {
    const { name, position, img, stars, description } = props.item;
    const theme = useSelector(selectTheme);

    const defaultImage = "/assets/testimonial/default-user-image.png";

    return (
        <Container theme={theme}>
            <Header>
                <span className="quote">
                    <IoIosQuote />
                </span>
                <div>
                    {Array.from(Array(5), (e, i) => {
                        const star =
                            i < stars ? (
                                <AiOutlineStar />
                            ) : (
                                <AiOutlineStar
                                    color="grey"
                                />
                            );

                        return (
                            <span className="star" key={i}>
                                {star}
                            </span>
                        );
                    })}
                </div>
            </Header>
            <Body>{description}</Body>
            <Footer>
                <img src={img ? img : defaultImage} alt={name} />
                <div className="details">
                    <h1>{name}</h1>
                    <p>{position}</p>
                </div>
            </Footer>
        </Container>
    );
};
