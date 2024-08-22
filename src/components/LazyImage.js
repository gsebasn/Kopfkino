import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//https://github.com/Aljullu/react-lazy-load-image-component#readme

const LazyImage = ({ src, alt, placeholderSrc }) => {
    return (
        <LazyLoadImage
            src={src}
            alt={alt}
            placeholderSrc={placeholderSrc}
            effect="blur"
            wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: {transitionDelay: "0.5s"},
            }}
        />
    );
};

export default LazyImage;
