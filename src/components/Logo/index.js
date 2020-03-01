import React from "react";

import { Container } from "./styles";

export default function Logo(data) {
  return (
    <Container size={data.size}>
      <h1>Jean Bispo</h1>
      <div>dev front-end</div>
    </Container>
  );
}
