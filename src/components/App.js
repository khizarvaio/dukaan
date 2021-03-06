import React from 'react';
import {
  Container, Col, Row, Jumbotron
} from 'reactstrap';
import { Switch, Route, Link } from 'react-router-dom';
import ProductDetails from '../containers/ProductDetails';
import Products from '../containers/Products';
import Header from './Header';
import About from './About';

const App = () => (
  <Container fluid>
    <Route path="/" component={Header} />
    <Row>
      <Col lg={12}>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route component={NotFound} />
        </Switch>
      </Col>
    </Row>
  </Container>
);

const NotFound = () => (
  <Container fluid>
    <Jumbotron>
      <h1 className="display-3">404 Not Found!</h1>
      <p className="lead">Page Not Found!</p>
      <hr className="my-2" />
      <p>You can redirect to Home.</p>
      <p className="lead">
        <Link to="/products">Home</Link>
      </p>
    </Jumbotron>
  </Container>
);

export default App;
