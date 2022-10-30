import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
      const [error, setError] = useState('');

      const { signIn } = useContext(AuthContext);
      const navigate = useNavigate();

      const handleSubmit = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            signIn(email, password)
                  .then(result => {
                        const user = result.user;
                        form.reset();
                        setError('');
                        navigate('/');

                  })
                  .catch(err => {
                        console.error(err)
                        setError(error.message)
                  })
      }

      return (
            <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                        Login
                  </Button>
                  <Form.Text className="text-danger">
                        {error}
                  </Form.Text>
            </Form>
      );
};

export default Login;