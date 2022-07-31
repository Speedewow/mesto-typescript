import { IValues, ICard, ISelect } from './interfaces';

export type ButtonProps = {
  display?: string;
  isDisabled?: boolean;
  onClick?: any;
  children?: React.ReactNode;
};

export type InputProps = {
  margin?: string;
  color?: string;
  name?: string;
  value?: string | undefined;
  validationMessage?: string | undefined;
  placeholder?: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type PopupProps = {
  title: string;
  isOpen: boolean;
  children?: any;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  buttonText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isDisabled?: boolean;
};

export type AddPlacePopupProps = {
  isOpen: boolean;
  isLoading: boolean;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  onAddPlace: (values: IValues, e: React.FormEvent<HTMLFormElement>) => void;
};

export type EditAvatarPopupProps = {
  isOpen: boolean;
  isLoading: boolean;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  onUpdateAvatar: (values: IValues, e: React.FormEvent<HTMLFormElement>) => void;
};

export type EditProfilePopupProps = {
  isOpen: boolean;
  onUpdateUser: (values: IValues, e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
};

export type ConfirmPopupProps = {
  card: ISelect;
  isLoading: boolean;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  onCardDelete: (card: any, e: React.FormEvent<HTMLFormElement>) => void;
};

export type ImagePopupProps = {
  card: ISelect;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
};

export type HeaderProps = {
  email: string;
  onSignOut: () => void;
};

export type CardProps = {
  card: ICard;
  onCardClick: (card: ICard) => void;
  onCardLike: (card: ICard) => void;
  onCardDelete: (card: ICard) => void;
};

export type MainProps = {
  onEditAvatar: () => void;
  onEditProfile: () => void;
  onAddPlace: () => void;
  onCardClick: (card: ICard) => void;
  onCardLike: (card: ICard) => void;
  onCardDelete: (card: ICard) => void;
  cards: ICard[];
  children?: any;
  exact?: any;
  path?: string;
  isLogin: boolean;
  component?: any;
};
