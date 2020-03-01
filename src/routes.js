import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";

function Routes() {
  const location = useLocation();
  return (
    <Container>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
}

const Container = styled.main`
  height: 100%;

  & > * {
    height: 100%;
  }

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export default Routes;
