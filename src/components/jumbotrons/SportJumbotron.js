import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const jumbo = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Sports Article</h1>
          <p className="lead">Learn about sports and grow in life ..</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbo;