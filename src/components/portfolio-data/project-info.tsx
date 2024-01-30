import {Box, Typography, styled} from "@mui/material";
import Container from "../container";
import Image from "next/image";
import {projectInfo} from "@/utils/types";
import ProjectTechnologies from "./project-tech";

const projectInfoImage = {
  "@media (max-width: 600px)": {
    textAlign: "center",
  },
};
const Title = styled(Typography)({
  backgroundImage:
    "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
  fontWeight: 700,
  margin: "15px 0px",
  lineHeight: "30px",
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const SubTitle = styled(Typography)({
  color: "#fff",
  fontWeight: 600,
  lineHeight: "45.5px",
  textTransform: "uppercase",
  maxWidth: "800px"
});
export default function ProjectInfo({
  portfolioData,
}: {
  portfolioData: projectInfo;
}) {
  return (
    <Box
      sx={{
        padding: "100px 0px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            // justifyItems: "center",
            gap: "100px",
          }}
        >
          <Box
            sx={{
              display: "grid",
              justifyItems: "center",
              gap: "20px",
            }}
          >
            <Title
              sx={{
                fontSize: {xs: "20px", sm: "30px", lg: "40px"},
                textAlign: {xs: "center", lg: "left"},
              }}
            >
              {portfolioData.title}
            </Title>
            <SubTitle
              sx={{
                fontSize: {xs: "20px", lg: "25px"},
                textAlign: "center",
              }}
            >
              {portfolioData.description}
            </SubTitle>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              alignItems: "center",
              gap: {
                md: "58px",
                xs: "0px",
              },
            }}
          >
            <Box
              sx={{
                flex: "40%",
                ...projectInfoImage,
                "& .protfolio-image": {
                  objectFit: "contain",
                  height: "auto",
                  "@media (max-width: 600px)": {
                    width: "270px",
                    height: "250px",
                  },
                },
              }}
            >
              <Image
                className="protfolio-image"
                src={portfolioData.mainImage}
                alt={portfolioData.title}
                width={400}
                height={323}
              />
            </Box>
            <Box
              sx={{
                flex: "60%",
              }}
            >
              <ProjectTechnologies portfolioData={portfolioData} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
