import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
import gym from '../images/gym-cover.jpg'
import animals from '../images/dog-cover.jpg'
import events from '../images/events-cover.jpg';
import city from '../images/city-cover.jpg';

function Work() {
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return (
        <div ref={ref} className="container">
            <div className="row">
                <div className="works-header">
                    <h1>Works</h1>
                </div>
            </div>
            <div className="row">
                <div className="column works gap-10">
                    <div className="works-overlay">
                        <motion.div
                            className="gym"
                            initial={{opacity: 0}}
                            animate={inView ? {opacity: 1} : {opacity: 0}}
                            transition={{duration: 0.5}}
                        >
                            <img className="work-images" src={gym} alt="gym"/>
                            <a href="#" className="fade-in-link">Click to see Gym photos</a>
                        </motion.div>
                    </div>
                    <div className="works-overlay">
                        <motion.div
                            className="events"
                            initial={{opacity: 0}}
                            animate={inView ? {opacity: 1} : {opacity: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            <img className="work-images" src={events} alt="wedding"/>
                            <a href="#" className="fade-in-link">Click to see Event photos</a>
                        </motion.div>
                    </div>
                </div>
                <div className="column gap-10">
                    <div className="works-overlay">
                        <motion.div
                            className="city"
                            initial={{opacity: 0}}
                            animate={inView ? {opacity: 1} : {opacity: 0}}
                            transition={{duration: 0.5, delay: 0.4}}
                        >
                            <img className="work-images" src={animals} alt="dog"/>
                            <a href="#" className="fade-in-link">Click to see Animal photos</a>
                        </motion.div>
                    </div>
                    <div className="works-overlay">
                        <motion.div
                            className="animals"
                            initial={{opacity: 0}}
                            animate={inView ? {opacity: 1} : {opacity: 0}}
                            transition={{duration: 0.5, delay: 0.6}}
                        >
                            <img className="work-images" src={city} alt="city"/>
                            <a href="#" className="fade-in-link">Click to see City photos</a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
