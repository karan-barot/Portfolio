import React from 'react'

export default function Contact() {

    return (
        <div className="contact-container container">
            <form >
                <h1>Contact Me</h1>
                <div className="form-right">
                    <h4>Contact Details</h4>
                    <p><i className="uil uil-envelope"></i><span>karanbarot33344@gmail.com</span></p>
                    <p><i className="uil uil-phone"></i><span>+1(437)-987-3077</span></p>
                    <p><i className="uil uil-map-marker"></i><span>Toronto, ON</span></p>
                </div>
                <div className="form-left">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
