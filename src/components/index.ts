import { Login } from './Login';
import { Register } from './Register';
import { ProtectedRoute } from './ProtectedRoute';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { EditAvatarPopup } from './EditAvatarPopup';
import { EditProfilePopup } from './EditProfilePopup';
import { AddNewPlacePopup } from './AddNewPlacePopup';
import { ConfirmPopup } from './ConfirmPopup';
import { ImagePopup } from './ImagePopup';
import { InfoTooltip } from './InfoTooltip';
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
