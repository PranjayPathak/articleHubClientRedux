import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";
// import Article from './Article';

const Cardd = ({ data, topic }) => {
  const history = useHistory();

  const handleClick = (article) => {
    if(localStorage.getItem("email") === null){
      alert("Please Login to see the content ");
      return;
    }
    history.push(`/${topic}/${article._id}`);
  };

  return (
    <div>
      <Container>
        <Row>
          {data.map((article) => (
            <Col id="cpad" lg="3" md="6" sm="12">
              <Card key={article._id} className="dimension">
                <CardImg
                  top
                  width="100%"
                  src={article.imageUrl}
                  alt={article}
                />
                <CardBody className="cardbody">
                  <CardTitle tag="h5">{article.heading}</CardTitle>
                  <CardText>
                    <p>{article.article}</p>
                    Author : <em>{article.author}</em>
                    <br />
                    <br />
                    <Button outline onClick={() => handleClick(article)}>
                      Read more
                    </Button>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cardd;
