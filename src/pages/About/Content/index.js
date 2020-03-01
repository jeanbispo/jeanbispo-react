import React, { useEffect, useState } from "react";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import parseHTML from "html-react-parser";
import { Container } from "./styles";

const { window } = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

export default function Content(data) {
  const [pageData, setPageData] = useState();
  useEffect(() => {
    setPageData(data.content);
  }, [data.content]);
  return (
    <Container>
      {pageData && (
        <div>{parseHTML(DOMPurify.sanitize(pageData.content.rendered))}</div>
      )}
    </Container>
  );
}
