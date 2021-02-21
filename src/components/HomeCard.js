import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const HomeCard = () => {
  const history = useHistory();

  return (
    <div>
      <Container>
        <Row>
          <Col id="cpad" lg="3" md="6" sm="12">
            <Card key={1}>
              <CardImg top width="100%" src="./images/1.jpg" alt="Economical" />
              <CardBody>
                <CardTitle tag="h5">Economical</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button onClick={() => history.push("/economical")}>
                  Read more
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col id="cpad" lg="3" md="6" sm="12">
            <Card key={2}>
              <CardImg top width="100%" src="./images/2.jpg" alt="Technical" />
              <CardBody>
                <CardTitle tag="h5">Technical</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button onClick={() => history.push("/technical")}>
                  Read more
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col id="cpad" lg="3" md="6" sm="12">
            <Card key={3}>
              <CardImg top width="100%" src="./images/3.jpg" alt="Sport" />
              <CardBody>
                <CardTitle tag="h5">Sport</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button onClick={() => history.push("/sport")}>
                  Read more
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col id="cpad" lg="3" md="6" sm="12">
            <Card key={4}>
              <CardImg top width="100%" src="./images/4.png" alt="Science" />
              <CardBody>
                <CardTitle tag="h5">Science</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button onClick={() => history.push("/science")}>
                  Read more
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeCard;
