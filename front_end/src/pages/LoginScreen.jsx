
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    return (
        <>
          <h1>Sign In</h1>
    
          <Form >
            <Form.Group className='my-2' controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
               
              ></Form.Control>
            </Form.Group>
    
            <Form.Group className='my-2' controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
            
              ></Form.Control>
            </Form.Group>
    
            <Button  type='submit' variant='primary'>
              Sign In
            </Button>
    
    
          </Form>
    
          <Row className='py-3'>
            <Link to='/register'>
            <Col>
              New Customer?{' '}    
                Register
            </Col>
            </Link>
            
          </Row>
        </>
      );
    
    
    }
    export default LoginScreen;