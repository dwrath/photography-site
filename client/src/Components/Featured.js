import React, { useState, useEffect } from 'react';
import heroImg from '../images/heroImg.jpeg'
import girlInGym from '../images/girlInGym.jpg'
import reese from '../images/reese.jpg'
import railroad from '../images/railroad-tracks.jpg'
import dumbell from '../images/dumbell.jpg'



const images = [
    { url: heroImg, alt: 'Image 1' },
    { url: girlInGym, alt: 'Image 2' },
    { url: reese, alt: 'Image 3' },
    { url: railroad, alt: 'Image 4' },
    { url: dumbell, alt: 'Image 5' },
];

const Featured = () => {
    const [translateX, setTranslateX] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTranslateX(prevTranslateX => {
                if (prevTranslateX <= -2000) {
                    setCurrentImageIndex((currentImageIndex + 1) % images.length);
                    return prevTranslateX + 2000;
                } else {
                    return prevTranslateX - 1;
                }
            });
        }, 20);

        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    return (
        <div className="container justify-center">
            <div className="row">
                <div className="column align-center ticker-container">
                    <div className="ticker-tape" style={{ transform: `translateX(${translateX}px)` }}>
                        {[...images, ...images].map((image, index) => (
                            <img
                                key={index}
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
