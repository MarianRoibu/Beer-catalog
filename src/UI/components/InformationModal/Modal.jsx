import React from "react";
import { BeerImage,  CloseButton, ModalContainer, ModalContent,  } from "../../Styles/ComponentsStyles/InformationModalStyle";


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