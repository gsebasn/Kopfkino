// src/components/ImageGallery.js

import React, { useState, useRef, useCallback, useContext } from 'react';
import GalleryContext from '../state/GalleryContext';
import { useInView } from 'react-intersection-observer';
import LazyImage from './LazyImage';
import '../css/components/ImageGallery.min.css';

// Initial set of images
const initialImages = [
    {
        low: 'https://ucarecdn.com/85401fc8-ce16-45a8-a849-c28b27b31b01/-/scale_crop/300x300/',
        high: 'https://ucarecdn.com/85401fc8-ce16-45a8-a849-c28b27b31b01/-/preview/666x1000/',
    }
    // Add more initial images as needed
];

const ImageGallery = () => {
    const [images, setImages] = useState(initialImages);
    const [page, setPage] = useState(1);
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const { theme } = useContext(GalleryContext);

    const loadMoreImages = useCallback(() => {

        console.log("Get images!!");

        // Simulate an API call to fetch more images
        const newImages = [
            {
                low: 'https://ucarecdn.com/85401fc8-ce16-45a8-a849-c28b27b31b01/-/scale_crop/300x300/',
                high: 'https://ucarecdn.com/85401fc8-ce16-45a8-a849-c28b27b31b01/-/preview/666x1000/',
            },
            {
                low: 'https://ucarecdn.com/5f08de9e-2b32-4ec1-a003-e20b25294f92/-/scale_crop/300x300/',
                high: 'https://ucarecdn.com/5f08de9e-2b32-4ec1-a003-e20b25294f92/-/preview/999x669/',
            },
            {
                low: 'https://ucarecdn.com/97161757-5b6b-4553-a438-c0b6bf6156a0/-/scale_crop/300x300/',
                high: 'https://ucarecdn.com/97161757-5b6b-4553-a438-c0b6bf6156a0/-/preview/664x1000/',
            },
            // Add more new images as needed
        ];
        setImages((prevImages) => [...prevImages, ...newImages]);
        setPage((prevPage) => prevPage + 1);
    }, []);

    React.useEffect(() => {
        if (inView) {
            loadMoreImages();
        }
    }, [inView, loadMoreImages]);

    return (
        <>
            <div className="gallery-content">
                <div className={`gallery ${theme}`} >
                    {
                        images.map((image, index) => (
                            <div className="gallery-item" key={index}>
                                <LazyImage src={image.high}
                                           placeholderSrc={image.low}
                                           alt={`Gallery image ${index + 1}`}/>
                            </div>
                        ))
                    }
                    <div ref={ref} className="loading">
                        Loading more images...
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageGallery;
