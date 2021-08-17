// import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => {
 
    return (
        <ContentLoader
            viewBox="20 -20 250 250"
            height={250}
            width={300}
            backgroundColor="transparent"
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
    )
}
  


export default Loader;