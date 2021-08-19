import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import ThemeContext from '../../Contexts/ThemeContext';

import './ThemeSetter.css';

const ThemeSetter = () => {

  const { isThemeDark, handleChangeTheme } = useContext(ThemeContext);
    
  return (
    <button
      className={`switch ${isThemeDark ? "active" : ""}`}
      id="switch"
      onClick={handleChangeTheme}
    >
      <span>
        <FontAwesomeIcon icon={faSun} />
      </span>
      <span>
        <FontAwesomeIcon icon={faMoon} />
      </span>
    </button>
  );
};

export default ThemeSetter;
