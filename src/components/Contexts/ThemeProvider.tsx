import { useEffect, useState } from 'react';
// import { Theme } from '../../types/typeApp';
import ThemeContext, { initialState } from './ThemeContext';

type Props = {
    children: JSX.Element | React.ReactNode;
}

const localStorage = window.localStorage;

//React.ReactNode: acepta casi de todo(string, array, null, undefined), en cambio JSX.Element es más restrictivo
const ThemeProvider = ({ children }: Props) => {
    const [isThemeDark, setIsThemeDark] = useState<boolean>(initialState.isThemeDark);
    
    const handleChangeTheme = () => {
        setIsThemeDark(!isThemeDark);
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        if(savedTheme)
            setIsThemeDark(JSON.parse(savedTheme));

    },[]);

    useEffect(() => {
        localStorage.setItem('isDarkMode',isThemeDark.toString());
    },[isThemeDark]);

    return (
        <ThemeContext.Provider value={{ isThemeDark, handleChangeTheme }}>
            <div className={ isThemeDark ? 'dark' : ''}>
                { children }
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
