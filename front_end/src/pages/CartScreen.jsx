import { Link, useNavigate } from 'react-router-dom';

import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';

import empty from '../assets/empty.jpg';
import React from 'react'

const CartScreen = () => {
    return (
        <Row>
          <Col md={8}>
            <h1 style={{ marginBottom: '20px' }}>Shopping Cart</h1>
                <img src={empty} alt="" />

                Your cart is empty <Link to='/'>Go Back</Link>
             
            
          </Col>
        </Row>
      );
}

export default CartScreen