import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  margin-top: 5vh;
  background-color: #ffffff;
`;

export const ContainerMain = styled.div`
  display: flex;
  width: 25vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  margin-top: 5vh;
  background-color: #ffffff;
`;

const Image = styled.img`
  height: 70vh;
  width: 190vh;
  object-fit: cover;
  border-radius: 5%;
  margin-bottom: 0px;
  opacity: 1;
  transition: opacity 0.5s ease;
  z-index: 1;

  @media (max-width: 768px) {
    width: auto;
    height: 50vh;
    max-width: 100%;
  
  }
  @media (max-width: 1080px) {
    width: auto;
    height: 50vh;
    max-width: 100%;
  }
`;


const ScrollToTopButton = styled.button`
  width: 50px;
  height: 50px;
  margin-left: 50%;
  margin-top: 5%;
  border-radius: 50%;
  background-color: #ffffff;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
 
  transition: background-color 0.3s ease;
z-index: 150;
  &:hover {
    background-color: #f0f0f0;
  }

  &:before {
    content: "";
    display: inline-block;
    border-style: solid;
    border-width: 0.2em 0.2em 0 0;
    border-color: #333;
    transform: rotate(-225deg);
    width: 0.8em;
    height: 0.8em;
    position: relative;
    left: 5%;
    top: 10%;
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  &:hover:before {
    transform: rotate(-407deg);
  }
`;

export { Container, Image, ScrollToTopButton };