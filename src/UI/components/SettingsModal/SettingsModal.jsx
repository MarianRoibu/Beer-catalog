import React from "react";
import {
  SwitchButton, CloseButton, AddPropertyButton, AddPropertyInput, AddPropertyForm,
  PropertyLabel, PropertyCheckbox, ModalProperty, ModalContent, ModalTitle, ModalHeader, ModalContainer, ModalOverlay
} from "../../Styles/ComponentsStyles/SettingsModalStyle";


const SettingsModal = ({
  displayedProperties,
  onPropertyToggle,
  onViewSwitch,
  onClose,
  isCardView,
}) => {
  const handlePropertyToggle = (property) => {
    onPropertyToggle(property);
  };


  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Card Settings</ModalTitle>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalContent>
          <h3>Displayed Properties:</h3>


          <ModalProperty>
            <PropertyCheckbox
              type="checkbox"
              id="image"
              checked={displayedProperties.includes("image")}
              onChange={() => handlePropertyToggle("image") ? false : true}
            />
            <PropertyLabel htmlFor="image">Image</PropertyLabel>
          </ModalProperty>

          <ModalProperty>
            <PropertyCheckbox
              type="checkbox"
              id="tagline"
              checked={displayedProperties.includes("tagline")}
              onChange={() => handlePropertyToggle("tagline")}
            />
            <PropertyLabel htmlFor="tagline">Tagline</PropertyLabel>
          </ModalProperty>

          <ModalProperty>
            <PropertyCheckbox
              type="checkbox"
              id="name"
              checked={displayedProperties.includes("name")}
              onChange={() => handlePropertyToggle("name")}
            />
            <PropertyLabel htmlFor="name">Name</PropertyLabel>
          </ModalProperty>


          <ModalProperty>
            <PropertyCheckbox
              type="checkbox"
              id="abv"
              checked={displayedProperties.includes("abv")}
              onChange={() => handlePropertyToggle("abv")}

            />
            <PropertyLabel htmlFor="abv">ABV</PropertyLabel>
          </ModalProperty>
          <ModalProperty>
            <PropertyCheckbox
              type="checkbox"
              id="ibu"
              checked={displayedProperties.includes("ibu")}
              onChange={() => handlePropertyToggle("ibu")}

            />
            <PropertyLabel htmlFor="ibu">IBU</PropertyLabel>
          </ModalProperty>
          <ModalProperty>
            <PropertyCheckbox
              type="checkbox"
              id="description"
              checked={displayedProperties.includes("description")}
              onChange={() => handlePropertyToggle("description")}

            />
            <PropertyLabel htmlFor="description">Description</PropertyLabel>
          </ModalProperty>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SettingsModal;