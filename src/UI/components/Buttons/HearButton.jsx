import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.active ? '#ff0000' : '#000000')};
  cursor: pointer;
`;

const HeartButton = ({ beerId, favorites, handleBookmark }) => {
  const isFavorite = favorites.includes(beerId);

  return (
    <Button onClick={() => handleBookmark(beerId)} active={isFavorite}>
      {isFavorite ? <FaHeart /> : <FaHeart />}
    </Button>
  );
};

export default HeartButton;
