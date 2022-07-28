import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { HeaderStyled } from './styled/Header.styled';
import { HeaderContainer } from './styled/Container.styled';
import { QuitButton, BurgerButton } from './styled/Buttons.styled';
import { Section } from './styled/Section.styled';
import { BurgerIcon, BurgerCloseIcon } from './icons/BurgerIcon';
import { LogoIcon } from './icons/LogoIcon';

export const Header = ({ email, onSignOut }) => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!isBurgerOpen);
  };
  return (
    <>
      <Route exact path="/">
        <Section display={isBurgerOpen ? 'flex' : 'none'}>
          <p>{email}</p>
          <QuitButton onClick={onSignOut}>Выйти</QuitButton>
        </Section>
      </Route>
      <HeaderStyled>
        <LogoIcon />
        <Switch>
          <Route exact path="/">
            <HeaderContainer>
              <p>{email}</p>
              <QuitButton onClick={onSignOut}>Выйти</QuitButton>
            </HeaderContainer>
            <BurgerButton onClick={toggleBurger}>
              {isBurgerOpen ? <BurgerCloseIcon /> : <BurgerIcon />}
            </BurgerButton>
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
