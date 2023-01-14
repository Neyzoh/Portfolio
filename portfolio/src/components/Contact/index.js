import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.scss'

function Contact () {

    const form = useRef();

    const [name, setName] = useState({value: '', error: ''});
    const [email, setEmail] = useState({value: '', error: ''});
    const [message, setMessage] = useState({value: '', error: ''});
    const [showSuccess, setShowSuccess] = useState(false);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const validateForm = () => {
        let formIsValid = true;
        if (!name.value) {
            setName({...name, error: 'Veuillez précisez qui vous êtes'});
            formIsValid = false;
        }
        if (!emailRegex.test(email.value)) {
            setEmail({...email, error: 'Veuillez entrer une adresse e-mail valide'});
        }
        if (!message.value) {
            setMessage({...message, error: 'Veuillez entrer un message'});
            formIsValid = false;
        }
        return formIsValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            sendEmail(e)
        }
    }

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1fgfpfn', 'template_c9uiyhh', form.current, 'HOYCH8CBh3zorJma6')
        .then((result) => {
            console.log(result.text);
            console.log('message sent !');
            setShowSuccess(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className='contact-container'>
            <p className='my-contact'>Contact</p>
            <div className='contact-box'>
                <h2 className='contact-box-title'>Contact me</h2>
                <form ref={form} onSubmit={handleSubmit} >
                    <div className='user-box'>
                        <label>Qui êtes vous :</label>
                        {name.error && <p className="error">{name.error}</p>}
                        <input type="text" name="user_name" value={name.value} onChange={e => setName({value: e.target.value, error: ''})}/>
                    </div>
                    <div className='user-box'>
                        <label >Votre mail :</label>
                        <>
                            {email.error && <p className="error">{email.error}</p>} 
                        </>
                        <input type="email" name="user_email" value={email.value} onChange={e => setEmail({value: e.target.value, error: ''})}/>
                    </div>
                    <div className='user-box'>
                        <label >Message :</label>
                        <>  
                            {message.error && <p className="error">{message.error}</p>} 
                        </>
                        <textarea name="message" onChange={e => setMessage({value: e.target.value, error: ''})} />
                    </div>
                    <div className='sumbmit-btn-container'>
                            <>
                                {showSuccess && <p className="success">Votre message à bien été envoyé</p>}
                            </>
                        <input className='submit-input' type="submit" value="Envoyé" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;