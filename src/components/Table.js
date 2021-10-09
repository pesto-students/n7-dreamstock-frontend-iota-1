import { DataTable } from "primereact/datatable";
import { Column as PrimeReactColumn } from "primereact/column";
import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

export const Table = styled(DataTable)`
  ${compose(space, position, layout, typography)};

  table {
    border-collapse: separate !important;
    border-spacing: 0 5px;
  }

  .p-datatable-header {
    display: none;
  }

  .p-datatable-header {
    background: var(--secondary-bg);
    color: var(--title-color);
    border: solid var(--outline-color);
    border-width: 1px 0 1px 0;
  }

  .p-datatable-thead > tr > th {
    border: 1px solid var(--outline-color);
    border-width: 1px 0 1px 0;
    font-weight: 600;
    background: var(--secondary-bg);
    color: var(--title-color);
  }

  .p-datatable-tbody > tr {
    background: var(--card-bg);
    color: var(--title-color);
    outline-color: var(--outline-color);
    border-radius: 5px;
  }

  .p-datatable-tbody > tr > td {
    // border: solid var(--outline-color);
    // border-width: 1px 0 1px 0;
    outline-color: var(--outline-color);
    font-weight: var(--light-weight);
    background-color: var(--primary-bg);
  }

  .p-datatable-tfoot {
    display: none;
  }

  .p-datatable-tfoot > tr > td {
    text-align: left;
    border: 1px solid var(--outline-color);
    border-width: 1px 0 1px 0;
    background: var(--secondary-bg);
  }

  .p-paginator {
    background: var(--secondary-bg);
    color: var(--title-color);
    border: solid var(--outline-color);
    border-width: 0;
    border-radius: 4px;
  }

  .p-paginator-pages .p-paginator-page {
    border: 1px solid var(--outline-color);
    color: var(--title-color);
  }

  .p-paginator .p-paginator-first,
  .p-paginator .p-paginator-prev,
  .p-paginator .p-paginator-next,
  .p-paginator .p-paginator-last {
    border: 1px solid var(--outline-color);
    color: var(--title-color);
  }

  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: var(--outline-color);
    border-color: var(--gradient-color-primary);
  }

  .p-datatable-tbody > tr > td .p-column-title {
    display: none;
  }

  tr th:first-child {
    border: solid var(--outline-color);
    border-width: 1px 0 1px 1px;
    border-radius: 5px 0 0 5px;
  }

  tr th:last-child {
    border: solid var(--outline-color);
    border-width: 1px 1px 1px 0;
    border-radius: 0 5px 5px 0;
  }

  @media screen and (max-width: 40em) {
    .p-datatable-thead > tr > th,
    .p-datatable-tfoot > tr > td {
      display: none !important;
    }

    .p-datatable-tbody > tr > td {
      text-align: left;
      display: block;
      width: 100%;
      float: left;
      clear: left;
      border: 0 none;
    }

    .p-datatable-tbody > tr > td .p-column-title {
      padding: 0.4rem;
      min-width: 30%;
      display: inline-block;
      margin: -0.4em 1em -0.4em -0.4rem;
      font-weight: bold;
    }

    .p-datatable-tbody > tr > td:last-child {
      border-bottom: 1px solid var(--outline-color);
    }
  }
`;

export const Column = styled(PrimeReactColumn)`
  ${compose(space, position, layout, typography)};
`;
