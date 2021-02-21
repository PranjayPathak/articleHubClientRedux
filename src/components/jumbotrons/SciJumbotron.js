import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const jumbo = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Science Article</h1>
          <p className="lead">Learn about science and grow in life ..</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbo;