import React from "react";
import styled from "styled-components";
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  cursor: pointer;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  cursor: auto;
`;

const BeerImage = styled.img`
  width: 30vh;
  height: 10vh;
  margin-left: 15%;
  object-fit: contain;
  border-radius: 5%;
  margin-bottom: 10px;
`;

const Modal = ({ beer, onClose }) => {
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={handleModalClick}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <BeerImage src={beer.image_url} alt="beer"/>
        <h2>{beer.name}</h2>
        <p>ABV: {beer.abv}</p>
        <p>IBU: {beer.ibu}</p>
        <p>Description: {beer.description}</p>
        <p>Tagline: {beer.tagline}</p>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;