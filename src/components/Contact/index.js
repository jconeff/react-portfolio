import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../assets/css/contact.css';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        };

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    };

    return (
        <section className="flex-row justify-center vw100">
             <div className="w75 bg-dark px-5 py-5 flex-row">
             <div className="text-center w100 mb-2">
                <h2 className="text-center w100 mb-2">Let's Connect!</h2>
                <p>jessicaconeff@gmail.com</p>
                <p>Palm Beach Gardens, FL</p>
                <p>614.738.6045</p>
                </div>
                

                <div class="col-lg-8 mx-auto">
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            </div>
            </div>
        </section>
    );
};

export default Contact;