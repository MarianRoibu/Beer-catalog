import styled, {keyframes} from "styled-components";


const openAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div`
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 400px;
  animation: ${openAnimation} 0.3s ease;
`;

const ModalHeader = styled.div`
  padding: 16px;
  background-color: #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin: 0;
`;



const ModalContent = styled.div`
  padding: 16px;
`;

const ModalProperty = styled.div`
  margin-bottom: 12px;
`;

const PropertyCheckbox = styled.input`
  margin-right: 8px;
`;

const PropertyLabel = styled.label`
  font-size: 14px;
  color: #333;
`;

const AddPropertyForm = styled.form`
  margin-top: 16px;
`;

const AddPropertyInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const AddPropertyButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  background-color: #ff4040;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  &:hover {
    background-color: #ff0000;
  }
`;

const SwitchButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export { SwitchButton, CloseButton, AddPropertyButton, AddPropertyInput, AddPropertyForm,
  PropertyLabel, PropertyCheckbox, ModalProperty, ModalContent, ModalTitle, ModalHeader, ModalContainer, ModalOverlay }