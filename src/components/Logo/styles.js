import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-family: "Reey", sans-serif;
    font-size: ${props => (props.size === "big" ? "50px" : "30px")};
    line-height: 140px;
  }

  div {
    ${props => (props.size === "big" ? "" : "display: none;")};
    font-family: "Open Sans", sans-serif;
    font-size: 11px;
    font-size: 0.6875rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: right;
    color: #808080;
    margin-top: -20px;
  }
`;
