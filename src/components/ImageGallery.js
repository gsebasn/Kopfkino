// src/components/ImageGallery.js

import React, { useState, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import LazyImage from './LazyImage';
import '../css/components/ImageGallery.min.css';

// Initial set of images
const initialImages = [
    {
        low: 'https://ucarecdn.com/82d533f7-34d7-441d-8473-2fae9d2794fd/-/scale_crop/300x300/',
        high: 'https://ucarecdn.com/85401fc8-ce16-45a8-a849-c28b27b31b01/-/preview/666x1000/',
    },
    {
        low: 'https://ucarecdn.com/82d533f7-34d7-441d-8473-2fae9d2794fd/-/scale_crop/300x300/',
        high: 'https://ucarecdn.com/85401fc8-ce16-45a8-a849-c28b27b31b01/-/preview/666x1000/',
    },
    // Add more initial images as needed
];

const ImageGallery = () => {
    const [images, setImages] = useState(initialImages);
    const [page, setPage] = useState(1);
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const loadMoreImages = useCallback(() => {
        // Simulate an API call to fetch more images
        const newImages = [
            {
                low: 'https://ucarecdn.com/82d533f7-34d7-441d-8473-2fae9d2794fd/-/scale_crop/300x300/',
                high: 'https://ucarecdn.com/85401fc8-ce16-45a8-a849-c28b27b31b01/-/preview/666x1000/',
            },
            {
                low: 'https://ucarecdn.com/82d533f7-34d7-441d-8473-2fae9d2794fd/-/scale_crop/300x300/',
                high: 'https://ucarecdn.com/85401fc8-ce16-45a8-a849-c28b27b31b01/-/preview/666x1000/',
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
                <div className="gallery">
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
