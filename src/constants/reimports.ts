import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { EditAvatarPopup } from '../components/EditAvatarPopup';
import { EditProfilePopup } from '../components/EditProfilePopup';
import { AddNewPlacePopup } from '../components/AddNewPlacePopup';
import { ConfirmPopup } from '../components/ConfirmPopup';
import { ImagePopup } from '../components/ImagePopup';
import { InfoTooltip } from '../components/InfoTooltip';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { getSingIn, getSingUp, getLoginData } from '../utils/AuthApi';
import {
  getUserInfo,
  getInitialCard,
  setUserInfo,
  createNewCard,
  createNewAvatar,
  deleteCard,
  changeLikeCardStatus,
} from '../utils/Api';

export {
  Login,
  Register,
  ProtectedRoute,
  Header,
  Main,
  EditAvatarPopup,
  EditProfilePopup,
  AddNewPlacePopup,
  ConfirmPopup,
  ImagePopup,
  InfoTooltip,
  CurrentUserContext,
  getSingIn,
  getSingUp,
  getLoginData,
  getUserInfo,
  Footer,
  getInitialCard,
  setUserInfo,
  createNewCard,
  createNewAvatar,
  deleteCard,
  changeLikeCardStatus,
};
