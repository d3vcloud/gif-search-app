import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import './ThemeSetter.css';
import { useContext } from 'react';
import ThemeContext from '../../Contexts/ThemeContext';
//#303846 = creat-react-app
//#212529 = navbar - combo

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
