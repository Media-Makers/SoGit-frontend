import axios from "axios";
import React, { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Accordion, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";
const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const url = import.meta.env.VITE_BACKENDURL || "http://localhost:3001";

export default function NewsSearch() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const newsData = await axios.get(`${url}/news`);
      setArticles(newsData.data);
    };

    getNews();
  }, [articles]);
  const likeHandler = async (isLiked,id) => {
    const result = await axios.patch(`${url}/likes/${id}`,{likes:isLiked});
    console.log (result.data)
    setArticles ([])

  }

  const { isAuthenticated } = useAuth0();
  return (
    <>
      {articles.map((newsData, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{newsData.title}</Card.Title>
            <Card.Subtitle>{newsData.desciption}</Card.Subtitle>
            <Card.Text>{newsData.content}</Card.Text>
            <div>
              <Icon
                icon={
                  newsData.likes ? "icon-park-twotone:like" : "icon-park:like"
                }
                onClick={()=>likeHandler(newsData.likes, newsData._id)}
                
              />
            
             
            </div>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Comments</Accordion.Header>
                <Accordion.Body>
                  {newsData.comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
