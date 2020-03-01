import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    -moz-animation: spin 1.5s infinite linear;
    animation: spin 1.5s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      -moz-transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
      -moz-transform: rotate(360deg);
    }
  }
`;
