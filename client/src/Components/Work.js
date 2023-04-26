import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import gym from '../images/gym.jpg'
import animals from '../images/animals.jpg'

function Work() {
    const { ref, inView } = useInView({
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
                    <motion.div
                        className="gym"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img className="work-images" src={gym}/>
                    </motion.div>
                    <motion.div
                        className="events"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    ></motion.div>
                </div>
                <div className="column gap-10">
                    <motion.div
                        className="city"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <img className="work-images" src={animals}/>
                    </motion.div>
                    <motion.div
                        className="animals"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    ></motion.div>
                </div>
            </div>
        </div>
    )
}

export default Work
