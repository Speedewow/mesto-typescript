import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { HeaderStyled } from './styled/Header.styled';
import { HeaderContainer } from './styled/Container.styled';
import { QuitButton, BurgerButton } from './styled/Buttons.styled';
import { Section } from './styled/Section.styled';
import logo from '../images/logo.svg';

export const Header = ({ email, onSignOut }) => {
	const [isBurgerOpen, setBurgerOpen] = useState(false);
	const toggleBurger = () => {
		setBurgerOpen(!isBurgerOpen);
	};
	return (
		<>
			<Route exact path="/">
				<Section isOpen={isBurgerOpen}>
					<p>{email}</p>
					<QuitButton onClick={onSignOut}>Выйти</QuitButton>
				</Section>
			</Route>
			<HeaderStyled>
				<img src={logo} alt="Логотип" />
				<Switch>
					<Route exact path="/">
						<HeaderContainer>
							<p>{email}</p>
							<QuitButton onClick={onSignOut}>Выйти</QuitButton>
						</HeaderContainer>
						<BurgerButton isActive={isBurgerOpen} onClick={toggleBurger} />
					</Route>
					<Route path="/sing-up">
						<Link to="/sing-in">Войти</Link>
					</Route>
					<Route path="/sing-in">
						<Link to="/sing-up">Зарегистрироваться</Link>
					</Route>
				</Switch>
			</HeaderStyled>
		</>
	);
};
