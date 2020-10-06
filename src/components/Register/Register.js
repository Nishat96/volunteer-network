import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../logos/Group.png';
import './Register.css';
import {UserContext} from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className="login__logo">
                <img className="logo" src={logo} alt=""/>
            </div>
            <div className="register-section">
                <h2> Register as a Volunteer </h2>
                <div className="google__div">
                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder={loggedInUser.name} className="input-field" />
                        
                        <Form.Text className="text-muted">
                            
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" placeholder={loggedInUser.email} className="input-field"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="date" placeholder="Date" className="input-field"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Description" className="input-field"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text"  className="input-field"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Link to ='/allWork'>
                        <Button variant="primary" type="submit" className="submit-btn">
                            Submit
                        </Button>
                    </Link>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;