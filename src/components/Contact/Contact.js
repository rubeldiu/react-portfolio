import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Navigation from '../common/Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Contact.css'
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_8acoekp',
            'template_40mg9bh',
            toSend,
            'user_kQUiBc11PGOFJmYRDlGY4'
          )
            .then((response) => {
              alert('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
    return (
        <>
            <Navigation/>
            <Container fluid className="project-section"> 
            <Container>
            <h1 className="project-heading">
          Send your  <strong className="main-name">message </strong>
        </h1>       
                <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">                       
                        <Form.Control type="text"
                         name='from_name'
                         placeholder="Enter your Name" 
                         onChange={handleChange}
                         required
                         value={toSend.from_name} />
                 </Form.Group>
                <Form.Group controlId="formBasicEmail">                        
                        <Form.Control type="email"
                         name='reply_to'
                         placeholder="Enter your Email" 
                         onChange={handleChange}
                         required
                         value={toSend.reply_to} />
                 </Form.Group>

                 <Form.Group controlId="formBasicEmail">                       
                        <Form.Control as="textarea" 
                        placeholder="Enter your Query"
                         name='message'
                         rows={3}
                         onChange={handleChange}
                         required
                         value={toSend.message}
                        />
                 </Form.Group>
                 <button className="btn btn-primary" type="submit">
                        Submit
                </button>
                </Form>
             </Container>   
            </Container>
    <Footer/>
    </>
    );
};

export default Contact;