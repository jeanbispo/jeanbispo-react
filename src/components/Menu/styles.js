import styled from "styled-components";

export const Container = styled.nav`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
    li {
      display: inline;
      a {
        font-family: "Open Sans", sans-serif;
        font-size: 11px;
        font-size: 0.6875rem;
        font-weight: 400;
        letter-spacing: 2px;
        line-height: 48px;
        text-transform: uppercase;
        display: inline-block;
        transition: 0.3s;
        padding: 2px 10px;
        color: #333;
        text-decoration: none;
        &:hover {
          color: #6d6d6d;
        }
      }
    }
  }
`;
