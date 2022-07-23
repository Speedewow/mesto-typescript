import { Card } from './Card';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { MainStyled } from './styled/Main.styled';
import { AvatarButton, EditButton, AddButton } from './styled/Buttons.styled';
import { AvatarContainer, ProfileContainer } from './styled/Container.styled';
import { Profile } from './styled/Profile.styled';
import { Cards } from './styled/Cards.styled';

export const Main = ({
	onEditAvatar,
	onEditProfile,
	onAddPlace,
	cards,
	onCardClick,
	onCardLike,
	onCardDelete,
}) => {
	const { avatar, name, about } = useContext(CurrentUserContext);
	return (
		<MainStyled>
			<Profile>
				<AvatarContainer>
					<AvatarButton onClick={onEditAvatar} />
					<img src={avatar} alt={name} />
				</AvatarContainer>
				<ProfileContainer>
					<h1>{name}</h1>
					<EditButton onClick={onEditProfile} />
					<p>{about}</p>
				</ProfileContainer>
				<AddButton onClick={onAddPlace} />
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
