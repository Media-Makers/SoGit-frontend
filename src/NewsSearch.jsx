import React, { useState, useEffect } from "react";

const NewsSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

const fetchNewsData = async () => {
    try {
      const apiKey = "YOUR_NEWS_API_KEY";
      const response = await fetch( //insert http for news api
        
      );
      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      console.error("Error fetching news data: ", error);
    }
  };

const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  
  useEffect(() => {
    const filtered = newsData.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNews(filtered);
  }, [searchQuery, newsData]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetchNewsData();
    }
  }, [searchQuery]);

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
      {filteredNews.length > 0 ? (
        <div>
          <h3>News Results:</h3>
          <ul>
            {filteredNews.map((article, index) => (
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
};

export default NewsSearch;
