import {Box, Typography, styled} from "@mui/material";
import Container from "../container";
import Image from "next/image";
import {projectInfo} from "@/utils/types";
import ProjectTypeItem from "../portfolio/ProjectTypeItem";

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
            justifyItems: "center",
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
                alt="cartoon-img"
                width={400}
                height={323}
              />
            </Box>
            <Box
              sx={{
                flex: "60%",
              }}
            >
              {portfolioData.projectType && (
                <Box>
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "30px",
                      fontWeight: 600,
                    }}
                  >
                    Project Type:
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "20px",
                      maxWidth: {xs: "fit-content", sm: "610px"},
                      borderRadius: "5px",
                      border: "1px solid  #DD2C00",
                      backgroundColor: "#071626",
                      display: "flex",
                      flexDirection: {xs: "column", sm: "row"},
                      alignItems: "flex-start",
                      padding: "13px 14px",
                      gap: {xs: "20px", sm: "0px"},
                    }}
                  >
                    {portfolioData.projectType.videoGame && (
                      <ProjectTypeItem
                        iconSrc="/assets/social-media-icons/project-info-type-svg1.svg"
                        altText="Video Game"
                        label="Video Game"
                      />
                    )}
                    {portfolioData.projectType.mobileApp && (
                      <ProjectTypeItem
                        iconSrc="/assets/social-media-icons/project-info-type-svg1.svg"
                        altText="Mobile App"
                        label="Mobile App"
                      />
                    )}
                    {portfolioData.projectType.arMobileApp && (
                      <ProjectTypeItem
                        iconSrc="/assets/social-media-icons/project-info-type-svg1.svg"
                        altText="AR MOBILE APP"
                        label="AR MOBILE APP"
                      />
                    )}
                  </Box>
                </Box>
              )}
              {portfolioData.technologyStacks && (
                <Box
                  sx={{
                    marginTop: "35px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "30px",
                      fontWeight: 600,
                    }}
                  >
                    Technology Stacks:
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "20px",
                      maxWidth: {xs: "fit-content", sm: "610px"},
                      borderRadius: "5px",
                      border: "1px solid  #DD2C00",
                      backgroundColor: "#071626",
                      display: "flex",
                      flexDirection: {xs: "column", sm: "row"},
                      alignItems: "flex-start",
                      padding: "13px 14px",
                      gap: {xs: "20px", sm: "0px"},
                    }}
                  >
                    {portfolioData.technologyStacks.unity && (
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <Image
                          src="/assets/social-media-icons/project-info-unity.svg"
                          alt="project-info-type-svg1"
                          width={36}
                          height={36}
                        />
                        <Typography
                          sx={{
                            color: "#FFF",
                            fontSize: "24px",
                            fontWeight: 500,
                            paddingRight: "20px",
                          }}
                        >
                          Unity
                        </Typography>
                      </Box>
                    )}
                    {portfolioData.technologyStacks.autoDesk && (
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <Image
                          src="/assets/social-media-icons/project-info-unity.svg"
                          alt="project-info-type-svg1"
                          width={36}
                          height={36}
                        />
                        <Typography
                          sx={{
                            whiteSpace: "nowrap",
                            color: "#FFF",
                            fontSize: "24px",
                            fontWeight: 500,
                            paddingRight: "20px",
                          }}
                        >
                          Auto desk Maya
                        </Typography>
                      </Box>
                    )}
                    {portfolioData.technologyStacks.blender && (
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <Image
                          src="/assets/social-media-icons/project-info-unity.svg"
                          alt="project-info-type-svg1"
                          width={36}
                          height={36}
                        />
                        <Typography
                          sx={{
                            whiteSpace: "nowrap",
                            color: "#FFF",
                            fontSize: "24px",
                            fontWeight: 500,
                          }}
                        >
                          Blender
                        </Typography>
                      </Box>
                    )}
                    {portfolioData.technologyStacks
                      .adobePhotoshopIllustrator && (
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <Image
                          src="/assets/social-media-icons/adobe.svg"
                          alt="project-info-type-svg1"
                          width={36}
                          height={36}
                        />
                        <Typography
                          sx={{
                            whiteSpace: "nowrap",
                            color: "#FFF",
                            fontSize: "24px",
                            fontWeight: 500,
                          }}
                        >
                          Adobe Photoshop & Illustrator
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              )}
              {portfolioData.availableAt && (
                <Box
                  sx={{
                    marginTop: "35px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "30px",
                      fontWeight: 600,
                    }}
                  >
                    Available at:
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "20px",
                      maxWidth: {xs: "fit-content", sm: "610px"},
                      borderRadius: "5px",
                      border: "1px solid  #DD2C00",
                      backgroundColor: "#071626",
                      display: "flex",
                      flexDirection: {xs: "column", sm: "row"},
                      alignItems: "flex-start",
                      padding: "13px 14px",
                      gap: {xs: "20px", sm: "0px"},
                    }}
                  >
                    {portfolioData.availableAt.appleStore && (
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <Image
                          src="/assets/social-media-icons/project-info-apple.svg"
                          alt="project-info-type-svg1"
                          width={36}
                          height={36}
                        />
                        <Typography
                          sx={{
                            color: "#FFF",
                            fontSize: "24px",
                            fontWeight: 500,
                            paddingRight: "20px",
                          }}
                        >
                          Apple Store
                        </Typography>
                      </Box>
                    )}
                    {portfolioData.availableAt.playStore && (
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <Image
                          src="/assets/social-media-icons/project-info-playstore.svg"
                          alt="project-info-type-svg1"
                          width={36}
                          height={36}
                        />
                        <Typography
                          sx={{
                            color: "#FFF",
                            fontSize: "24px",
                            fontWeight: 500,
                          }}
                        >
                          Play Store
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
