import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import Header from "./Header";
import api from "../../services/api";
import Content from "./Content";

export default function About() {
  const [pageData, setPageData] = useState();

  useEffect(() => {
    api("pages")
      .get("141")
      .then(({ data }) => {
        setPageData(data);
      });
  }, []);

  return (
    <Container>
      <Header />
      <Content content={pageData} />
    </Container>
  );
}
