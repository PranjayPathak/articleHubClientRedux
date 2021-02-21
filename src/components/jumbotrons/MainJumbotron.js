import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const jumbo = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to ArticleHub</h1>
          <p className="lead">Learn and Write ideas and experience..</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbo;