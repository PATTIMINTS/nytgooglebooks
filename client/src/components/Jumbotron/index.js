import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Google Book Search</h1>
          <p className="lead">Books to search and save.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;