import React, { useEffect, useState } from 'react';
import { Theme } from '../../types/typeApp';

//Context

export const initialState = {
    isThemeDark: false,
    setIsThemeDark: (state:boolean) => console.warn('Tema sin definir')
}

export const ThemeContext = React.createContext<Theme>(initialState);

//Provider

type Props = {
    children: JSX.Element;
}

export const ThemeProvider = ({ children }: Props) => {

    const [isThemeDark, setIsThemeDark] = useState<boolean>(initialState.isThemeDark);

    useEffect(() => {

        const savedTheme = localStorage.getItem('isDarkMode');
        if(savedTheme)
            setIsThemeDark(JSON.parse(savedTheme));

    },[]);

    useEffect(() => {
        localStorage.setItem('isDarkMode',isThemeDark.toString());
    },[isThemeDark]);

    return (
        <ThemeContext.Provider value={{ isThemeDark, setIsThemeDark }}>
            <div className={ isThemeDark ? 'dark' : ''}>
                { children }
            </div>
        </ThemeContext.Provider>
    )
}