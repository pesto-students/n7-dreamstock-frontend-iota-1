import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { Section } from "../components/Section";
import { P } from "../components/Paragraph";
import { ButtonSecondary } from "../components/Button";
import { Carousel } from "../components/Carousel";
import { Image } from "../components/Image";
import STOCK from "../assets/images/stock-graph.png";

const LandingPage = () => {
  const products = [1, 2, 3, 4, 5];
  const responsiveOptions = [
    {
      breakpoint: "1600px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1100px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "800px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "500px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = () => {
    return (
      <div className="product-item-content">
        <Image height="15vw" src={STOCK} />
      </div>
    );
  };
  return (
    <Div>
      <Section>
        <Container>
          <Div minHeight={"40vh"} flexRow mt={5} pr={5} pl={5}>
            <Div
              width={["100%", "100%", "50%", "50%"]}
              height="100%"
              mt={5}
              mb={5}
            >
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
          </Div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Div width={[1]} mt={5} pr={5} pl={5} display={["none", "block"]}>
            <Carousel
              value={products}
              numVisible={3}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              className="custom-carousel"
              itemTemplate={productTemplate}
            />
          </Div>
        </Container>
      </Section>
    </Div>
  );
};

export default LandingPage;
