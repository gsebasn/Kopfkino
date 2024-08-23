import React, { useState, useRef, useEffect } from 'react';

const PinchZoom = ({ children, initialScale = 1 }) => {
    const [scale, setScale] = useState(initialScale);
    const [startDistance, setStartDistance] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleTouchMove = (event) => {
            console.log('handleTouchMove');
            if (event.touches.length === 2) {
                const distance = getDistance(event.touches[0], event.touches[1]);
                const newScale = (distance / startDistance) * scale;
                console.log('newScale: ' + newScale);
                setScale(newScale);
            }
        };

        const handleTouchStart = (event) => {
            if (event.touches.length === 2) {
                const distance = getDistance(event.touches[0], event.touches[1]);
                setStartDistance(distance);
            }
        };

        const handleTouchEnd = () => {
            setStartDistance(0);
        };

        const container = containerRef.current;
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [scale, startDistance]);

    const getDistance = (touch1, touch2) => {
        const x = touch1.clientX - touch2.clientX;
        const y = touch1.clientY - touch2.clientY;
        return Math.sqrt(x * x + y * y);
    };

    return (
        <div
            ref={containerRef}
            style={{
                overflow: 'hidden',
                position: 'relative',
                transform: `scale(${scale})`,
                transformOrigin: '0 0',
            }}
        >
            {children}
        </div>
    );
};

export default PinchZoom;