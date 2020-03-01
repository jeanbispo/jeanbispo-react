import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="about">about</Link>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="http://">
            blog
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://">
            linkedin
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="http://">
            cv
          </a>
        </li>
      </ul>
    </Container>
  );
}
