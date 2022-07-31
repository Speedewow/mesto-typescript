import { Card } from './Card';
import { useContext, FC } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { MainStyled } from '../styled/Main.styled';
import { AvatarButton, EditButton, AddButton } from '../styled/Buttons.styled';
import { AvatarContainer, ProfileContainer } from '../styled/Container.styled';
import { Profile } from '../styled/Profile.styled';
import { Cards } from '../styled/Cards.styled';
import { EditIcon } from '../icons/EditIcon';
import { AvatarIcon } from '../icons/AvatarIcon';
import { AddIcon } from '../icons/AddIcon';
import { MainProps } from '../types/types';

export const Main : FC<MainProps>= ({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  cards,
  onCardClick,
  onCardLike,
  onCardDelete,
}) => {
  const { avatar, name, about } : any = useContext(CurrentUserContext);
  return (
    <MainStyled>
      <Profile>
        <AvatarContainer>
          <AvatarButton onClick={onEditAvatar}>
            <AvatarIcon />
          </AvatarButton>
          <img src={avatar} alt={name} />
        </AvatarContainer>
        <ProfileContainer>
          <h1>{name}</h1>
          <EditButton onClick={onEditProfile}>
            <EditIcon />
          </EditButton>
          <p>{about}</p>
        </ProfileContainer>
        <AddButton onClick={onAddPlace}>
          <AddIcon />
        </AddButton>
      </Profile>
      <Cards>
        <ul>
          {cards.map(card => (
            <Card
              key={card._id}
              onCardClick={onCardClick}
              card={card}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </Cards>
    </MainStyled>
  );
};
