import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Container } from "./styles";

export default function Loading(data) {
  const [isLoaded, setIsLoaded] = useState();

  useEffect(() => {
    setIsLoaded(data.isLoaded);
  }, [data.isLoaded]);

  return (
    <>
      {!isLoaded && (
        <Container>
          <AiOutlineLoading3Quarters
            size="45"
            color="#060606"
            className="loading"
          />
        </Container>
      )}
    </>
  );
}
