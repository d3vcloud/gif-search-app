import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from '../../Contexts/ThemeContext';

import './ThemeSetter.css';

const ThemeSetter = () => {

  const { isThemeDark, setIsThemeDark } = useContext(ThemeContext);
    
  return (
    <button
      className={`switch ${isThemeDark ? "active" : ""}`}
      id="switch"
      onClick={() => setIsThemeDark(!isThemeDark)}
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
