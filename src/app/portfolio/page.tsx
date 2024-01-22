import Header from "@/components/Header";
import QuestionForm from "@/components/QuestionForm";
import PortfolioGameCards from "@/components/portfolio/portfolio-game-cards";
import { Box } from "@mui/material";

export default function Portfolio() {
    return(
        <>
        <Header num={3} url={"/assets/images/about-us-bg.png"}/>
        <PortfolioGameCards/>
        <QuestionForm />
        </>
    )
}