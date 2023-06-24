import styled, { keyframes } from "styled-components";
import { FaHeart } from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-bottom: 5rem;
  background-color: #ffffff;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding-bottom: 0vh;
  z-index: 2;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BeerImage = styled.img`
  width: 20vh;
  height: 10vh;
  object-fit: contain;
  border-radius: 5%;
  margin-bottom: 10px;
`;

const BeerName = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 2rem;
`;

const BeerDetails = styled.p`
  margin-bottom: 10px;
  color: #1d16169f;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 75vh;
  z-index: 1000;
`;

const ButtonFilters = styled.button`
  background-color: #4CAF50;
  border: none;
  width: 5rem;
  min-width: 5rem;
    height: 2rem;
  border-radius: 4px;
  color: #fff;
  margin-left: 1vh;
  z-index: 9999;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 480px) {
    margin-left: 3vh;
    margin-top: auto;
    width: 120%;
    font-size:.5em;
    
  }
`;

const ButtonContainerFilters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: .2vh;
  width: auto;
  max-width: 10%;
  margin-left: 0vh;
  margin-top: 1vh;
  z-index: 1000;

  @media (max-width: 480px) {
   margin: 1vh;
  }

  @media (min-width: 1080px) {
    top: 0vh;
  }
`;

const CardButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -20vh;
  z-index: 100;
`;

const FavoriteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -20vh;
  z-index: 10000;
`;

const HeartIcon = styled(FaHeart)`
  vertical-align: middle;
  margin-right: 5px;
`;

const LikeButton = styled.button`
  color: ${props => (props.className === 'active' ? 'red' : 'black')};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  color: #333;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #eee;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
    color: #999;
  }
`;

const ButtonFavorite = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  color: #fff;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #999;
  }
`;



const ButtonSettings = styled.button`
  background-color: transparent; 
  border: none;
  border-radius: 4px;
  color: #fff;
  margin-left: 70vh;
  cursor: pointer;
  transition: background-color 0.2s ease;

  @media (min-width: 1080px) {
    margin-left: 90vh;
  }

  @media (max-width: 770px) {
    margin-left: 50vh;
  }

  @media (max-width: 420px) {
    margin-left: 15vh;
  }
`;

const Table = styled.table`
  margin-top: 12rem;
  z-index: 999;
`;

export {
  Container,
  ContentContainer,
  PostContainer,
  BeerImage,
  BeerName,
  BeerDetails,
  ButtonContainer,
  ButtonContainerFilters,
  CardButtonContainer,
  FavoriteButtonContainer,
  Button,
  ButtonFavorite,
  ButtonFilters,
  ButtonSettings,
  Table,
  LikeButton,
  HeartIcon
};
