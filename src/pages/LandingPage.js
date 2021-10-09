import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { Section } from "../components/Section";
import { P } from "../components/Paragraph";
import { ButtonSecondary } from "../components/Button";
import BannerImage from "../assets/images/Banner.png";
import StockImage from "../assets/images/stock1.jpg";
import CarouselDemo from "./CarouselDemo";
import { Image } from "../components/Image";

const LandingPage = () => {
  return (
    <Div>
      <Section
        backgroundImage={"url(" + BannerImage + ")"}
        backgroundRepeat="no-repeat"
        backgroundSize="auto"
        backgroundPosition="center top"
        pt={"100px"}
        pb={"100px"}
      >
        <Container>
          <Div minHeight={"20vh"} flexRow mt={5} pr={5} pl={5}>
            <Div width={["100%", "100%", "50%", "50%"]} height="100%" mt={5}>
              <P fontSize={"var(--fs-h2)"}>The New Way to Invest In Stocks</P>
              <P>
                A fancy stock exchange game where users can buy/sell shares of
                U.S. companies as if they were trading in the real world.
              </P>
              <ButtonSecondary
                label="START TRADING"
                onClick={() => {
                  window.location.href = "/login";
                }}
              />
            </Div>
            <Div flexCenter width={["100%", "100%", "50%", "50%"]}>
              <Image src={StockImage} height="400px" />
            </Div>
          </Div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Div width={[1]} mt={5} pr={5} pl={5}>
            <CarouselDemo></CarouselDemo>
          </Div>
        </Container>
      </Section>
    </Div>
  );
};

export default LandingPage;
