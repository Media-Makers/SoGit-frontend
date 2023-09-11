import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
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
  console.log(articles);
  return (
    <>
      {articles.map((newsData, index) => (
        <Card key ={index}>
          <Card.Body>
          <Card.Title>{newsData.title}</Card.Title>
          <Card.Subtitle>{newsData.desciption}</Card.Subtitle>
          <Card.Text>{newsData.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
