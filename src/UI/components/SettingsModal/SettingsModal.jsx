import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
z-index: 999;
  /* Styles for the modal overlay */
`;

const ModalContainer = styled.div`
z-index: 999;
top: 10%;
position: absolute;
  /* Styles for the modal container */
`;

const ModalHeader = styled.div`
  /* Styles for the modal header */
`;

const ModalTitle = styled.h2`
  /* Styles for the modal title */
`;

const ModalContent = styled.div`
  /* Styles for the modal content */
`;

const ModalProperty = styled.div`
  /* Styles for each modal property */
`;

const PropertyCheckbox = styled.input`
  /* Styles for the property checkbox */
`;

const PropertyLabel = styled.label`
  /* Styles for the property label */
`;

const AddPropertyForm = styled.form`
  /* Styles for the add property form */
`;

const AddPropertyInput = styled.input`
  /* Styles for the add property input */
`;

const AddPropertyButton = styled.button`
  /* Styles for the add property button */
`;

const CloseButton = styled.button`
  /* Styles for the close button */
`;

const SwitchButton = styled.button`
  /* Styles for the switch button */
`;
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
  
    const handleViewSwitch = () => {
      onViewSwitch(!isCardView);
    };
  
    return (
      <ModalOverlay>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Card Settings</ModalTitle>
            <button onClick={onClose}>Close</button>
          </ModalHeader>
          <ModalContent>
            <h3>Displayed Properties:</h3>
            <ModalProperty>
              <PropertyCheckbox
                type="checkbox"
                id="image"
                checked={displayedProperties.includes("image")}
                onChange={() => handlePropertyToggle("image")}
              />
              <PropertyLabel htmlFor="image">Image</PropertyLabel>
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
            {/* Add more properties as needed */}
            <h3>View:</h3>
          <SwitchButton onClick={handleViewSwitch}>
            {isCardView ? "Switch to Table View" : "Switch to Card View"}
          </SwitchButton>
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>
    );
  };
  
  export default SettingsModal;