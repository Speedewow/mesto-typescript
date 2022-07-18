import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from '../images/logo.svg';

export const Header = ({ email, onSignOut }) => {
	const [isBurgerOpen, setBurgerOpen] = useState(false);
	const toggleBurger = () => {
		setBurgerOpen(!isBurgerOpen);
	};

	return (
		<>
			<Route exact path="/">
				<div className={`header__info-mobile ${isBurgerOpen && 'header__info-mobile_active'}`}>
					<p className="header__email">{email}</p>
					<button className="header__button" onClick={onSignOut}>
						Выйти
					</button>
				</div>
			</Route>
			<header className="header">
				<img className="header__logo" src={logo} alt="Логотип" />
				<Switch>
					<Route exact path="/">
						<div className="header__info-container">
							<p className="header__email">{email}</p>
							<button className="header__button" onClick={onSignOut}>
								Выйти
							</button>
						</div>
						<button
							onClick={toggleBurger}
							className={`header__burger ${isBurgerOpen && 'header__burger_active'}`}
						/>
					</Route>
					<Route path="/sing-up">
						<Link to="/sing-in" className="header__link">
							Войти
						</Link>
					</Route>
					<Route path="/sing-in">
						<Link to="/sing-up" className="header__link">
							Зарегистрироваться
						</Link>
					</Route>
				</Switch>
			</header>
		</>
	);
};
