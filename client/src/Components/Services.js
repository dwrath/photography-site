import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from 'react-intersection-observer';
import {Link} from "react-router-dom";


const Services = () => {
    const scrollRef = useRef(null);
    const defaultOptions = {
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1.1,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    };

    const { ref, inView } = useInView({
        threshold: 0.5, // intersection ratio at which the callback should be executed
        triggerOnce: true, // only trigger the callback once
    });

    const variants = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
        hidden: {
            opacity: 0,
            scale: 0.5,
        },

    };

    return (
        <div ref={scrollRef} style={{ overflow: "scroll" }}>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
            >
                <div className="container justify-center services-spacing">
                    <div className="row full-width services-gap">
                        <div className="column align-center">
                            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                                <div className="photography-service">
                                    <h1 className="photography-heading">Photography</h1>
                                    <p>Visually stunning photography that captivate your audience</p>
                                    <div className="row justify-center align-center form-link">
                                        <p><Link to={{
                                            pathname: '/form',
                                            state: 1
                                        }}>Click here to go to Form</Link></p>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                        <div className="column align-center">
                            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                                <div className="videography-service">
                                    <h1 className="videography-heading">Videography</h1>
                                    <p>Visually stunning Videography that captivate your audience</p>
                                    <div className="row justify-center align-center form-link">
                                        <p><Link to={{
                                            pathname: '/form',
                                            state: 2
                                        }}>Click here to go to Form</Link></p>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                        <div className="column align-center">
                            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                                <div className="both-service">
                                    <h1 className="both-heading">Photography & Videography</h1>
                                    <p>Visually stunning photography and videography that captivate your audience</p>
                                    <div className="row justify-center align-center form-link">
                                    <p><Link to={{
                                        pathname: '/form',
                                        state: 1
                                    }}>Click here to go to Form</Link></p>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Services;
