import React from 'react';
import { Theme } from '../../types/typeApp';

export const initialState = {
    isThemeDark: false,
    handleChangeTheme: () => {}
}

const ThemeContext = React.createContext<Theme>(initialState);

export default ThemeContext;