import logo from './images/logo.svg';

function App() {
	return (
		<>
			<div className="root">
				<header className="header">
					<img className="header__logo" src={logo} alt="Логотип" />
				</header>
				<main className="main">
					<section className="profile">
						<div className="profile__avatar">
							<button className="profile__avatar-edit-button"></button>
							<img className="profile__image" src="<%=require('./images/avatar.jpg')%>" alt="Аватар" />
						</div>
						<div className="profile__info">
							<h1 className="profile__title"></h1>
							<button className="profile__edit-button"></button>
							<p className="profile__subtitle"></p>
						</div>
						<button className="profile__button"></button>
					</section>
					<section>
						<ul className="cards">
							<template className="card-template">
								<li className="card">
									<button className="card__delete-button"></button>
									<img className="card__image" alt="Картинка" src="#" />
									<div className="card__container">
										<h2 className="card__title"></h2>
										<div className="card__like-container">
											<button className="card__button"></button>
											<span className="card__like-counter"></span>
										</div>
									</div>
								</li>
							</template>
						</ul>
					</section>
				</main>
				<footer className="footer">
					<p className="footer__copyright">© 2022 Mesto Russia</p>
				</footer>
				<section className="popup avatar-popup">
					<form className="popup__form avatar-form" id="avatar-form" novalidate>
						<button className="popup__toggle"></button>
						<h2 className="popup__title">Обновить аватар</h2>
						<fieldset className="popup__fieldset">
							<input className="popup__input avatar-link-input" type="url" name="link" id="avatar-link" placeholder="Ссылка на картинку" autocomplete="off" required />
							<span className="popup__error avatar-link-error"></span>
						</fieldset>
						<button className="popup__submit-button" type="submit">
							Сохранить
						</button>
					</form>
				</section>
				<section className="popup profile-popup">
					<form className="popup__form profile-form" id="profile-form" novalidate>
						<button className="popup__toggle"></button>
						<h2 className="popup__title">Редактировать профиль</h2>
						<fieldset className="popup__fieldset">
							<input className="popup__input profile-name-input" type="text" name="name" id="profile-name" placeholder="Введите имя" autocomplete="off" minlength="2" maxlength="40" required />
							<span className="popup__error profile-name-error"></span>
							<input className="popup__input profile-info-input" type="text" name="info" id="profile-info" placeholder="Введите профессию" autocomplete="off" minlength="2" maxlength="200" required />
							<span className="popup__error profile-info-error"></span>
						</fieldset>
						<button className="popup__submit-button" type="submit">
							Сохранить
						</button>
					</form>
				</section>
				<section className="popup card-popup">
					<form className="popup__form card-form" id="card-form" novalidate>
						<button className="popup__toggle"></button>
						<h2 className="popup__title">Новое место</h2>
						<fieldset className="popup__fieldset">
							<input className="popup__input card-name-input" type="text" name="name" id="card-name" placeholder="Название" autocomplete="off" minlength="2" maxlength="30" required />
							<span className="popup__error card-name-error"></span>
							<input className="popup__input card-link-input" type="url" name="link" id="card-link" placeholder="Ссылка на картинку" autocomplete="off" required />
							<span className="popup__error card-link-error"></span>
						</fieldset>
						<button className="popup__submit-button" type="submit">
							Создать
						</button>
					</form>
				</section>
				<section className="popup confrim-popup">
					<form className="popup__form">
						<button className="popup__toggle"></button>
						<h2 className="popup__title">Вы уверены?</h2>
						<button className="popup__submit-button popup__delete-button" type="submit">
							Да
						</button>
					</form>
				</section>
				<section className="popup image-popup">
					<div className="popup__image-overlay"></div>
					<div className="popup__image-container">
						<button className="popup__toggle"></button>
						<img className="popup__image" alt="Картинка" src="#" />
						<h2 className="popup__image-title"></h2>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
