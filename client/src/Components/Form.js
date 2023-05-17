import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {motion} from "framer-motion";
import Navbar from "./Navbar";
import nic from '../images/nic.jpg'
import Footer from "./Footer";

const MyForm = (props) => {
    const location = useLocation()
    const {number} = location.state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [shootLocation, setShootLocation] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, like sending it to a server

    };

    return (
        <div className="page-wrapper">
            <div className="container justify-center">
                <Navbar/>
                <motion.div
                    className="row justify-space-between form-margin"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                <div className="row justify-space-between form-margin">
                    <div className="column justify-center form-image-column">
                        <div className="form-img-wrapper">
                            <img className="form-image" src={nic}/>
                        </div>

                    </div>

                    {number === 1 && (
                        <div className="column align-center">
                            <h1 className="form-title">Photography</h1>
                            <form className="column align-center" onSubmit={handleSubmit}>
                                <input type={'text'}
                                       className={'form-input'}
                                       id={'name'}
                                       value={name}
                                       placeholder={'Name'}
                                       onChange={(e) => setName(e.target.value)}/>
                                <input type={'text'}
                                        className={'form-input'}
                                       id={'email'}
                                       value={email}
                                       placeholder={'Email'}
                                       onChange={(e) => setEmail(e.target.value)}/>
                                <input type={'text'}
                                        className={'form-input'}
                                       id={'location'}
                                       value={shootLocation}
                                        placeholder={'Location'}
                                       onChange={(e) => setShootLocation(e.target.value)}/>
                                <select className={'form-input'} value={selectedTime} onChange={handleTimeChange}>
                                    <option value="">Select a time</option>
                                    <option value="8:00 AM">8:00 AM</option>
                                    <option value="9:00 AM">9:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="3:00 PM">3:00 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="5:00 PM">5:00 PM</option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                    <option value="10:00 PM">10:00 PM</option>
                                </select>
                                <button className={'form-input'} type={'submit'}>Submit</button>
                            </form>
                        </div>
                    )}
                    {number === 2 && (
                        <div>
                            <h1 className="form-title">Videography</h1>
                            <form className={'column align-center'} onSubmit={handleSubmit}>
                                <input type={'text'}
                                       className={'form-input'}
                                       id={'name'}
                                       value={name}
                                       placeholder={'Name'}
                                       onChange={(e) => setName(e.target.value)}/>
                                <input type={'text'}
                                       className={'form-input'}
                                       id={'email'}
                                       value={email}
                                       placeholder={'Email'}
                                       onChange={(e) => setEmail(e.target.value)}/>
                                <input type={'text'}
                                       className={'form-input'}
                                       id={'location'}
                                       value={shootLocation}
                                       placeholder={'Location'}
                                       onChange={(e) => setShootLocation(e.target.value)}/>
                                <select className={'form-input'} value={selectedTime} onChange={handleTimeChange}>
                                    <option value="">Select a time</option>
                                    <option value="8:00 AM">8:00 AM</option>
                                    <option value="9:00 AM">9:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="3:00 PM">3:00 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="5:00 PM">5:00 PM</option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                    <option value="10:00 PM">10:00 PM</option>
                                </select>
                                <button className={'form-input'} type={'submit'}>Submit</button>
                            </form>
                        </div>
                    )}
                    {number === 3 && (
                        <div>
                            <h1 className={'form-title both'}>Photography & Videography</h1>
                            <form className={'column align-center'} onSubmit={handleSubmit}>
                                <input type={'text'}
                                       className={'form-input'}
                                       id={'name'}
                                       value={name}
                                       placeholder={'Name'}
                                       onChange={(e) => setName(e.target.value)}/>
                                <input type={'text'}
                                       className={'form-input'}
                                       id={'email'}
                                       value={email}
                                       placeholder={'Email'}
                                       onChange={(e) => setEmail(e.target.value)}/>
                                <input type={'text'}
                                       className={'form-input'}
                                       id={'location'}
                                       value={shootLocation}
                                       placeholder={'Location'}
                                       onChange={(e) => setShootLocation(e.target.value)}/>
                                <select className={'form-input'} value={selectedTime} onChange={handleTimeChange}>
                                    <option value="">Select a time</option>
                                    <option value="8:00 AM">8:00 AM</option>
                                    <option value="9:00 AM">9:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="3:00 PM">3:00 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="5:00 PM">5:00 PM</option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                    <option value="10:00 PM">10:00 PM</option>
                                </select>
                                <button className={'form-input'} type={'submit'}>Submit</button>
                            </form>
                        </div>
                    )}
                </div>
                </motion.div>
            </div>
            <Footer/>
        </div>
    )
};

export default MyForm;
