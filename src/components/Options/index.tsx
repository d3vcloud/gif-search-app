import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLink } from '@fortawesome/free-solid-svg-icons';

import { copyTextToClipboard } from '../../helpers/copyClipboard';

import { GifData } from '../../types/typeApp';

import "./Options.css";

type Props = {
  gif: GifData;
  url: string;
  setIsVisible: (state:boolean) => void;
  actionFavorite: (gif: GifData) => void;
}

const Options: React.FC<Props> = ({gif ,url, setIsVisible, actionFavorite }) => {


  const handleCopyClick = () => {
    copyTextToClipboard(url)
      .then(() => {
        //Show flashMessage container
        setIsVisible(true);

        //Hide flashMessage container
        setTimeout(() => {
          setIsVisible(false)
        },4000);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      
      <button className='option' onClick={handleCopyClick}>
        <span aria-label='copy link of gif to clipboard' role='img'>
            <FontAwesomeIcon icon={faLink} />
        </span>
      </button>
      <button className='option' onClick={ () => actionFavorite(gif) }>
        <span aria-label='add gif to favorites' role='img'>
            <FontAwesomeIcon icon={faHeart} />
        </span>
      </button>
    </>
  );
};

export default Options;
