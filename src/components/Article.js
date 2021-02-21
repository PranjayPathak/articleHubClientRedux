import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import axios from "../axios";
// import App from '../App.css';

const Article = ({
  article,
  topic,
  email,
  alreadyLiked,
  alreadyDisliked,
  setAlreadyLiked,
  setAlreadyDisliked,
}) => {
  
  const [like, setLike] = useState(article.like);
  const [dislike, setDislike] = useState(article.dislike);
  const [liked, setLiked] = useState(alreadyLiked);
  const [disliked, setDisliked] = useState(alreadyDisliked);

  useEffect(() => {
    // console.log("liked chnaged", like);
    // console.log("disliked", dislike);
    // console.log(alreadyLiked, alreadyDisliked);

    axios
      .patch(`/${topic}/${article._id}`, {
        id: article._id,
        like: like,
        dislike: dislike,
      })
      .then((response) => {
        // console.log(response);
      })
      .catch((err) => console.log(err));

    if (alreadyDisliked !== disliked) {
      axios
        .patch(`/user/${email}`, { id: article._id, disliked: disliked })
        .then((response) => {
          // console.log(response);
        })
        .catch((err) => console.log(err));
    }

    if (alreadyLiked !== liked) {
      axios
        .patch(`/user/${email}`, { id: article._id, liked: liked })
        .then((response) => {
          // console.log(response);
        })
        .catch((err) => console.log(err));
    }
  }, [like, dislike]);

  const handleDislike = () => {
    // console.log("disliked");
    if (liked) {
      return;
    }
    if (disliked) {
      setDislike(dislike - 1);
    } else {
      setDislike(dislike + 1);
    }
    setAlreadyDisliked(disliked);
    setDisliked(!disliked);
  };

  const handleLike = () => {
    // console.log("liked");
    if (disliked) {
      return;
    }
    if (liked) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setAlreadyLiked(liked);
    setLiked(!liked);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div id="article">
              <h3>{article.heading}</h3>
              <img
                className="img-fluid mx-auto d-block"
                src={article.imageUrl}
                alt={article.heading}
              />
              <br />
              <p>{article.article}</p>
              <strong>
                <em>Author : {article.author}</em>
              </strong>
              <div>
                {liked ? (
                  <Button onClick={handleLike} color="primary">
                    Like : {like}
                  </Button>
                ) : (
                  <Button onClick={handleLike} color="primary" outline>
                    Like : {like}
                  </Button>
                )}
                {disliked ? (
                  <Button onClick={handleDislike} color="dark">
                    Dislike : {dislike}
                  </Button>
                ) : (
                  <Button onClick={handleDislike} color="dark" outline>
                    Dislike : {dislike}
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Article;
