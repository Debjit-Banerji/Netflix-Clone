import React from "react";
import styled from "styled-components";
import background from "../assets/login.jpg";

export default function BackgroundImage() {
  return (
    <Container>
      <div className="of">
        <img className="sliding-background" src={background} alt="background" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  .of {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    position: relative;
  }
  .sliding-background {
    position: absolute;
    height: 130%;
    width: 140%;
    min-width: 140%; /* Ensure the width is 140% of the container */
    min-height: 130%;
    animation: slide-diagonal 60s linear infinite;
  }

  @keyframes slide-diagonal {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-20%, -20%, 0);
    }
  }
`;
