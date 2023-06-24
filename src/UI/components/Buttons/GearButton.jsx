import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const GearButton = styled.button`
  background-color: #333;
  border: none;
  border-radius: 50%;
  color: #fff;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #222;
  }

  &.twist {
    animation: ${spinAnimation} 0.5s linear;
  }
`;


const GearButtonComponent = () => {
  const [twist, setTwist] = useState(false);

  const handleButtonClick = () => {
    setTwist(true);
    setTimeout(() => {
      setTwist(false);
    }, 1000);
  };

  return (
    <GearButton className={twist ? "twist" : ""} onClick={handleButtonClick}>
      <FontAwesomeIcon icon={faCog} size="lg" />
    </GearButton>
  );
};

export default GearButtonComponent;
