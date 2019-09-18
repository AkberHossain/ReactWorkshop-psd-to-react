import React from 'react'

import './ContactUs.css'

export default class ContactUsForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
          contactUsFormData: {
            name: '',
            email: '',
            subject: '',
            message: ''
          },
          formError: ''
        };
      }

    render () {
        return (
            <div className="contact-us-container">
                <h4>CONTACT US</h4>
                <p className="form-error">{this.state.formError}</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Name" name="name" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter Email" name="email" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Subject" name="subject" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <textarea type="text" rows='5' className="form-control" placeholder="Enter Message" name="message" onChange={this.onChange}/>
                    </div>
                    <button type="submit" className="btn footer-read-more">Submit</button>
                </form>
            </div>
        )
    }

    onChange = event => {
        this.setState({
            contactUsFormData: {
            ...this.state.contactUsFormData,
            [event.target.name]: event.target.value
            }
        });
    };

    onSubmit = event => {
        event.preventDefault();

        if(this.isInvalid()) {
            this.setState ({
                formError: '**All fields required'
            })
        } else {
            this.setState ({
                formError: ''
            })
            alert('Your form submitted successfully');

            console.log(this.state.contactUsFormData)
        }
    };

    isInvalid = () => {
        const { name, message, subject, email } = this.state.contactUsFormData;
        const inValid = name === '' || message === '' || email === '' || subject === '' ;
        return inValid;
    };
    
}
