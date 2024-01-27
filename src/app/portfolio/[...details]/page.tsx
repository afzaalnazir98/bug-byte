import Header from "@/components/Header";
import QuestionForm from "@/components/QuestionForm";
import PortfolioGameCards from "@/components/portfolio/portfolio-game-cards";

export default function Portfolio({ params }: { params: { details: string[] } }) {
  console.log(params.details[0])
  return (
    <>
      <Header num={3} url={"/assets/images/about-us-bg.png"} />
      <PortfolioGameCards />
      <QuestionForm />
    </>
  );
}
