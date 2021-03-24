import React, {useState} from 'react';
import './contact.styles.css';


const Contact = () =>{
    return(<div id="Contact">
        <h1>Get in touch!</h1>
        <p>Feel free to send me through any queries to: <a href="mailto:carinalrobinson@gmail.com">carinalrobinson@gmail.com</a> or contact me on my socials below!</p>
        <a className="socials fab fa-linkedin-in" href="https://www.linkedin.com/in/carina-robinson-586923127/"></a>
        <a className="socials fab fa-facebook-f" href="https://www.facebook.com/carina.robinson.503/"></a>
        <a className="socials fab fa-github" href="https://github.com/carinaluise"></a>
    </div>)
}

export default Contact;