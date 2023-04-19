import React, { useState, useEffect } from 'react';
import heroImg from '../images/heroImg.jpeg'
const images = [
    { url: heroImg, alt: 'Image 1' },
    { url: heroImg, alt: 'Image 2' },
    { url: heroImg, alt: 'Image 3' },
];

const Featured = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
    <div className="container justify-center">
        <div className="row">
            <div className="column align-center">
                <div className="ticker-tape">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={index === currentIndex ? 'active' : ''}
                            src={image.url}
                            alt={image.alt}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Featured;
