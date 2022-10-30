import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
      const { createUser } = useContext(AuthContext);

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

                  })
                  .catch(err => console.error(err))

            console.log(name, photoURL, email, password)
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
                  <Button variant="primary" type="submit">
                        Register
                  </Button>
                  <Form.Text className="text-muted">

                  </Form.Text>
            </Form>
      );
};

export default Register;