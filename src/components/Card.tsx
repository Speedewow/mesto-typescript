import { useContext, FC } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Container } from '../styled/Container.styled';
import { LikeButton, DeleteButton } from '../styled/Buttons.styled';
import { LikeActiveIcon, LikeIcon } from '../icons/LikeIcon';
import { DeleteIcon } from '../icons/DeleteIcon';
import { CardProps } from '../types/types';



export const Card:FC<CardProps> = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  const { _id } : any = useContext(CurrentUserContext);
  const isOwn : boolean = card.owner._id === _id;
  const isLiked : boolean = card.likes.some(like => like._id === _id);

  const handleCardClick = () => 
    onCardClick(card);
  ;

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleCardDelete = () => {
    onCardDelete(card);
  };

  return (
    <li>
      <DeleteButton display={isOwn ? 'block' : 'none'} onClick={handleCardDelete}>
        <DeleteIcon />
      </DeleteButton>
      <img src={card.link} onClick={handleCardClick} alt={card.name} />
      <Container display="flex" justifyContent="space-between" margin="20px 20px 26px">
        <h2>{card.name}</h2>
        <Container display="flex" flexDirection="column" gap="3px">
          <LikeButton onClick={handleLikeClick}>
            {isLiked ? <LikeIcon /> : <LikeActiveIcon />}
          </LikeButton>
          <span>{card.likes.length}</span>
        </Container>
      </Container>
    </li>
  );
};
