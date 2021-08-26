import React from 'react';

import { GifData } from '../../types/typeApp';

import Options from '../Options';

import './Gif.css';

type Props = {
    gif: GifData;
    setIsVisible: (state: boolean) => void;
    actionFavorite: (gif: GifData) => void;
}

type Cache = {
    [key: string]: boolean | Promise<any>
}

type ImgCache = {
    cache: Cache,
    read: (src: string) => any;
}

const imgCache: ImgCache = {
    cache : {},
    read(src: string) {
      if (!this.cache[src]) {
        this.cache[src] = new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            this.cache[src] = true;
            resolve(this.cache[src]);
          };
          img.src = src;
        }).then((img) => {
          this.cache[src] = true;
        });
      }
      if (this.cache[src] instanceof Promise) {
        throw this.cache[src];
      }
      return this.cache[src];
    }
};

const Gif = ({ gif, setIsVisible, actionFavorite }: Props) => {
  
    const { id, url, title } = gif;
    const newUrl = `https://media.giphy.com/media/${ id }/giphy.gif`;
    imgCache.read(url);

    return (
      <>
        <div className='gif'>
            <div className='gif-options hide'>
              <Options
                gif={ gif } 
                url={ newUrl } 
                setIsVisible={ setIsVisible }
                actionFavorite={ actionFavorite }
              />
            </div>
            <div className="image">
              <img 
                style={{ display: 'block', width: '100%', padding: 5/2 }} 
                src={url} 
                alt={title} />
            </div>
          </div>
      </>
        
    )
}

export default React.memo(Gif);
