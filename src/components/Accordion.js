import { Accordion } from "primereact/accordion";
import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

export const AccordionPrimary = styled(Accordion)`
  ${compose(space, position, layout, typography)};

  .p-accordion-header .p-highlight .p-accordion-header-link,
  .p-accordion-header .p-accordion-header-link,
  .p-accordion-content {
    background-color: var(--secondary-bg);
  }

  .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    background-color: var(--secondary-bg);
  }

  .p-accordion-header:hover {
    background-color: var(--card-bg);
  }
`;
