import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Accordion, Button, Card, Form } from "react-bootstrap";
import "./news.css";
import Icon from "./Icon";

// const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const url = import.meta.env.VITE_BACKENDURL || "http://localhost:3001";

export default function NewsSearch() {
  const [articles, setArticles] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      const newsData = await axios.get(`${url}/news`);
      setArticles(newsData.data);
    };

    if (articles.length === 0)getNews();
  }, [articles]);

  async function likeHandler(isLiked, id) {
    const result = await axios.patch(`${url}/likes/${id}`, { likes: isLiked });
    console.log(result.data);
    setArticles([]);
  }
  const submitComment = async (e, id) => {
    e.preventDefault();
    const result = await axios.patch(`${url}/comments/${id}`, {
      newComments: commentInput,
    });
    console.log(result.data);
    setCommentInput("");
    setArticles([]);
  };
  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  const selectArticle = (id) => {
    setSelectedArticleId(id);
  };

  const { isAuthenticated } = useAuth0();
  return (
    <div className="feed-container">
      <div className="parallax">
        {articles.map((newsData, index) => (
          <div className="index-div" key={index}>
            <div className="card-wrapper">
              <Card style={{ background: '#1e1f21', color: '#fff' }}>
                <Card.Body>
                  <Card.Title style={{ color: '#00fefb' }}>{newsData.title}</Card.Title>
                  <Card.Subtitle>{newsData.desciption}</Card.Subtitle>
                  <Card.Text>{newsData.content}</Card.Text>
                  {console.log(newsData.url)}

                  <Card.Text >
                    Article URL: <a href={newsData.url} style={{ color: '#084d9f' }}>{newsData.url}</a>
                  </Card.Text>
                  <Card.Text >
                    Article Image URL:{" "}
                    <a href={newsData.urlToImage} style={{ color: '#084d9f' }}>{newsData.urlToImage}</a>
                  </Card.Text>

                  <div className="icon-click">
                    <div
                      onClick={() => likeHandler(!newsData.likes, newsData._id)}
                    >
                      <Icon
                        className="icon-container"
                        onClick={() =>
                          likeHandler(!newsData.likes, newsData._id)
                        }
                        icon={
                          newsData.likes
                            ? "icon-park-twotone:like"
                            : "icon-park:like"
                        }
                      />
                    </div>
                  </div>

                  <Accordion >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header style={{ background: '#00fefb', color: '#fff' }}>Comments</Accordion.Header>
                      <Accordion.Body >
                        {newsData.comments.map((comment, index) => (
                          <p key={index}>{comment}</p>
                        ))}
                        {isAuthenticated && (
                          <Form
                            onSubmit={(e) => submitComment(e, newsData._id)}
                          >
                            <Form.Group>
                              <Form.Control
                                type="text"
                                placeholder="Add a comment..."
                                value={
                                  selectedArticleId === newsData._id
                                    ? commentInput
                                    : ""
                                }
                                onChange={handleCommentInput}
                                onFocus={() => selectArticle(newsData._id)}
                              />
                            </Form.Group>
                            <Button style={{ background: '#084d94'}} type="submit" variant="primary">
                              Add Comment
                            </Button>
                          </Form>
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
