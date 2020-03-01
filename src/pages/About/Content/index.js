import React, { useEffect, useState } from "react";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import parseHTML from "html-react-parser";
import { Container } from "./styles";
import Loading from "../../../components/Loading";

const { window } = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

export default function Content(data) {
  const [pageData, setPageData] = useState();
  const [isLoaded, setIsLoaded] = useState();

  useEffect(() => {
    setPageData(data.content);
  }, [data.content]);

  useEffect(() => {
    setIsLoaded(data.isLoaded);
  }, [data.isLoaded]);

  return (
    <Container>
      <Loading isLoaded={isLoaded} />
      {pageData && (
        <div>{parseHTML(DOMPurify.sanitize(pageData.content.rendered))}</div>
      )}
    </Container>
  );
}
