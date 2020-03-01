import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import Logo from "../../../components/Logo";
import Menu from "../../../components/Menu";

export default function Header() {
  return (
    <Container className="container">
      <Link to="/">
        <Logo size="small" />
      </Link>
      <Menu />
    </Container>
  );
}
