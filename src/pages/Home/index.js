import React from "react";

import { Container } from "./styles";

import Logo from "../../components/Logo";
import Menu from "../../components/Menu";

export default function Home() {
  return (
    <Container>
      <Logo size="big" />
      <Menu />
    </Container>
  );
}
