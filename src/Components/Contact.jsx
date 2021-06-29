import React from 'react'

export default function Contact() {
    return (
        <div className="contact-container">
            <form>
                <h1>Contact Me</h1>
                <h6>Get in touch</h6>
                <div className="form-container">
                    <div className="form-left">
                        <a>hello</a>
                    </div>
                    <div className="form-right">
                        <div className="name-field">
                            <input type="text" placeholder="First Name"/>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                        <div className="email-field">
                            <input type="text" placeholder="Email"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
