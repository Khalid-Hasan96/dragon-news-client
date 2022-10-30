import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, FaLinkedin } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../assets/brands/Brand1.png';
import brand2 from '../../../assets/brands/Brand2.png';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
      const { providerLogin } = useContext(AuthContext);

      const googleProvider = new GoogleAuthProvider();

      const handleGoogleSignIn = () => {

            providerLogin(googleProvider)
                  .then(result => {
                        const user = result.user;
                        console.log(user);
                  })
                  .catch(error => console.error(error))
      }
      return (
            <div>
                  <ButtonGroup vertical>
                        <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle /> Log In With Google</Button>
                        <Button variant="outline-dark"><FaGithub /> Log In With GitHub</Button>
                  </ButtonGroup>
                  <div className='mt-4'>
                        <h5>Find us on</h5>
                        <ListGroup>
                              <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                              <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                              <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                              <ListGroup.Item className='mb-2'><FaLinkedin /> Linkedin</ListGroup.Item>
                              <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                        </ListGroup>
                  </div>
                  <div>
                        <Carousel>
                              <Carousel.Item>
                                    <img
                                          className="d-block w-100"
                                          src={brand1}
                                          alt="First slide"
                                    />
                              </Carousel.Item>
                              <Carousel.Item>
                                    <img
                                          className="d-block w-100"
                                          src={brand2}
                                          alt="Second slide"
                                    />
                              </Carousel.Item>
                        </Carousel>
                  </div>
            </div>
      );
};

export default RightSideNav;