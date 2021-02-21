import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  FormText,
} from "reactstrap";
import axios from "../axios";

const Write = ({ author, email, accessToken }) => {
  const [topic, setTopic] = useState("Economical");
  const [heading, setHeading] = useState("");
  const [image, setImage] = useState(null);
  const [article, setArticle] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("article", article);
    data.append("topic", topic);
    data.append("heading", heading);
    data.append("author", author);
    data.append("image", image);

    // console.log(data);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        email: email,
        accessToken: accessToken,
      },
    };
    // console.log(accessToken);
    axios
      .post("/write", data, config)
      .then((res) => {
        alert("Successfully Submitted");
      })
      .catch((err) => console.log(err));
    setArticle("");
    setHeading("");
    setImage(null);
    setTopic("Economical")
  };

  return (
    <>
      <Container className="write">
        <Form
          onSubmit={submit}
          action="/write"
          method="post"
          encType="multipart/form-data"
        >
          <FormGroup>
            <Label for="exampleSelect">Topic</Label>
            <Input
              type="select"
              name="topic"
              id="exampleSelect"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            >
              <option>Economical</option>
              <option>Technical</option>
              <option>Sport</option>
              <option>Science</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Heading</Label>
            <Input
              type="text"
              name="heading"
              id="exampleSelect"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Image</Label>
            <Input
              type="file"
              name="image"
              id="exampleFile"
              value={null}
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
            <FormText color="muted">Size must be less than 5MB.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Article</Label>
            <Input
              type="textarea"
              rows="12"
              name="article"
              id="exampleText"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              required
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default Write;
