import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
      const [error, setError] = useState('');
      const [accepted, setAccepted] = useState(false);
      const { createUser, updateUserProfile } = useContext(AuthContext);

      const handleSubmit = event => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const photoURL = form.photoURL.value;
            const email = form.email.value;
            const password = form.password.value;

            createUser(email, password)
                  .then(result => {
                        const user = result.user;
                        setError('');
                        form.reset();
                        handleUpdateUserProfile(name, photoURL)
                  })
                  .catch(err => {
                        console.error(err)
                        setError(err.message);
                  })
      }
      const handleUpdateUserProfile = (name, photoURL) => {
            const profile = { displayName: name, photoURL: photoURL }
            updateUserProfile(profile)
                  .then(() => { })
                  .catch(error => console.error(error))
      }
      const handleAccepted = (event) => {
            setAccepted(event.target.checked)
      }

      return (
            <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>PhotoURL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="Enter Photo URL" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                              onClick={handleAccepted}
                              label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                  </Form.Group>
                  <Button variant="primary" type="submit" disabled={!accepted}>
                        Register
                  </Button>
                  <Form.Text className="text-muted">
                        {error}
                  </Form.Text>
            </Form>
      );
};

export default Register;