import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
}
export const ClientEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
}) => {
  return (
    <Html>
      <Head />
      <Preview>BuggByte Studios Welcome</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans mt-20 mb-20">
          <Container
            className="bg-black p-45 mt-20 mb-20 text-center"
            style={{
              background:
                "linear-gradient(112deg, rgba(23, 69, 113, 0.30) -13.12%, rgba(0, 0, 0, 0.30) 123.07%)",
            }}
          >
            <Link
              href="https://www.buggbytestudios.com/"
              className="mx-auto my-20 w-auto inline-block "
            >
              <Img
                src="https://www.buggbytestudios.com/_next/image?url=/assets/images/logo.png&w=256&q=75"
                title="BuggByte"
                width="230"
                height="70"
                style={{
                  display: "block",
                }}
                alt="BuggByte logo"
              />
            </Link>
            <Heading className="text-center my-0 leading-8 text-white mt-5">
              Hi! {name}
              <br /> Welcome to Buggbyte
            </Heading>

            <Section>
              <Row>
                <Text className="text-base text-center text-white">
                  Thanks for contacting us. <br />
                  Our Team will reach to you Shortly
                </Text>
              </Row>
            </Section>
          </Container>

          <Container className="mt-20 mb-20">
            <Section>
              <Row>
                <Column className="text-center ">
                  <Link
                    href="https://www.buggbytestudios.com/about-us"
                    className="text-dark"
                  >
                    About
                  </Link>
                </Column>
                <Column className="text-center text-white">
                  <Link
                    href="https://www.buggbytestudios.com/portfolio"
                    className="text-dark"
                  >
                    Portfolio
                  </Link>
                </Column>
              </Row>
            </Section>
            <Text className="text-center text-gray-400 mb-45">
              Copyright ©2024. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
