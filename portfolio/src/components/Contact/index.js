import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.scss'

function Contact () {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1fgfpfn', 'template_c9uiyhh', form.current, 'HOYCH8CBh3zorJma6')
        .then((result) => {
            console.log(result.text);
            console.log('message sent !');
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className='contact-container'>
            <p className='my-contact'>Contact</p>
            <div className='contact-box'>
                <h2 className='contact-box-title'>Contact me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='user-box'>
                        <label>Name :</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div className='user-box'>
                        <label >Email :</label>
                        <input type="email" name="user_email" />
                    </div>

                    <div className='user-box'>
                        <label >Message :</label>
                        <textarea name="message" />
                    </div>
                    <div className='sumbmit-btn-container'>
                        <input className='submit-input' type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;