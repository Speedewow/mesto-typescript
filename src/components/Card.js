import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Container } from './styled/Container.styled';
import { LikeButton, DeleteButton } from './styled/Buttons.styled';

export const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
	const { _id } = useContext(CurrentUserContext);
	const isOwn = card.owner._id === _id;
	const isLiked = card.likes.some(like => like._id === _id);

	const handleCardClick = () => {
		onCardClick(card);
	};

	const handleLikeClick = () => {
		onCardLike(card);
	};

	const handleCardDelete = () => {
		onCardDelete(card);
	};

	return (
		<li>
			<DeleteButton isOwn={isOwn} onClick={handleCardDelete} />
			<img src={card.link} onClick={handleCardClick} alt={card.name} />
			<Container display="flex" justifyContent="space-between" margin="20px 20px 26px">
				<h2>{card.name}</h2>
				<Container display="flex" flexDirection="column" gap="3px">
					<LikeButton isActive={isLiked} onClick={handleLikeClick} />
					<span>{card.likes.length}</span>
				</Container>
			</Container>
		</li>
	);
};
