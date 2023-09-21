import { Profile, Skills, Projects, TestimonialsComp } from "@/src/components";
import { ContainerArrow, Banner } from "./HomeElements";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";
import { ArrowUp } from "@/src/components/ArrowUp";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/GlobalRedux/Features/ThemeSlice";

export const Home = () => {
    const theme = useSelector(selectTheme);

    return (
        <>
            <Banner theme={theme}>
                <Profile />
                <Slide direction="up" triggerOnce>
                    <ContainerArrow>
                        <a href="#skills" className="arrow-down-icon">
                            <BsFillArrowDownSquareFill />
                        </a>
                    </ContainerArrow>
                </Slide>
            </Banner>
            <Skills />
            <Projects />
            <TestimonialsComp />
            <ArrowUp />
        </>
    );
};
