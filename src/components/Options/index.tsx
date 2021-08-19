import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLink } from '@fortawesome/free-solid-svg-icons';

import "./Options.css";

const Options = () => {
  return (
    <>
      <button className='option'>
        <span aria-label='copy link of gif to clipboard' role='img'>
            <FontAwesomeIcon icon={faLink} />
        </span>
      </button>
      <button className='option'>
        <span aria-label='add gif to favorites' role='img'>
            <FontAwesomeIcon icon={faHeart} />
        </span>
      </button>
    </>
  );
};

export default Options;
