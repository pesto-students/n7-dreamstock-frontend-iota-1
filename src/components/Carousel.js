import React from "react";
import { Carousel as PrimeReactCarousel } from "primereact/carousel";
import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const Carousel = styled(PrimeReactCarousel)`
  ${compose(space, position, layout, typography)}
`;
