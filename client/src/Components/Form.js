import React, { useState } from 'react';

const MyForm = (props) => {
    const { number } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, such as sending it to a server

    };

    return (
        <div>
            {number === 1 && (
                <div>
                    <h1>Photography</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor={'name'}>Name</label>
                        <input type={'text'}
                               id={'name'}
                               value={name}
                               onChange={(e) => setName(e.target.value)} />
                        <label htmlFor={'email'}>Email</label>
                        <input type={'text'}
                                 id={'email'}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor={'location'}>Location</label>
                        <input type={'text'}
                                 id={'location'}
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)} />
                        <label htmlFor={'time'}>Time</label>
                        <select value={selectedTime} onChange={handleTimeChange}>
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
                        <button type={'submit'}>Submit</button>
                        </form>
                </div>
            )}
        </div>
    )
};

export default MyForm;
