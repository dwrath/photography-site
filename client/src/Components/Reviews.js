import React from 'react';
import { motion } from 'framer-motion';
import {useInView} from "react-intersection-observer";

const reviews = [
    {
        id: 1,
        author: 'John Doe',
        title: 'Amazing Results',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elit elit. Donec non eleifend ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam eget dolor bibendum, congue lorem nec, pretium quam. Duis hendrerit lorem sit amet augue venenatis, eu consectetur neque placerat.'
    },
    {
        id: 2,
        author: 'Jane Smith',
        title: 'Expert Photographer',
        text: 'Nulla ornare ipsum euismod sapien blandit, eu scelerisque mauris tincidunt. Nam ut magna nunc. Vivamus eget turpis vel risus pharetra vulputate vel ut mauris. Praesent id risus elit. Integer pulvinar ex a eros euismod gravida. Praesent ac lobortis dolor.'
    }
];

const Reviews = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })
    return (
        <div ref={ref} className="container review-margin">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ?{ opacity: 1, y: 0 }: { opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="row justify-center review-header">
                    <h2>What do clients</h2>
                </div>
                <div className="row justify-center review-header">
                    <h2>Have to say</h2>
                </div>
            </motion.div>

            <div className="row">
                {reviews.map(review => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ?{ opacity: 1, y: 0 }: { opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="review container">
                            <div className="row">
                                <h3 className="review-title-weight">{review.title}</h3>
                            </div>

                            <div className="row review-weight">
                                <p>{review.text}</p>
                            </div>
                            <div className="row">
                                <h3>{review.author}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default Reviews;
