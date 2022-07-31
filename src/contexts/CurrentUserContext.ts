import React from 'react';
import { IUser } from '../types/interfaces';

export const CurrentUserContext = React.createContext<IUser>({});
