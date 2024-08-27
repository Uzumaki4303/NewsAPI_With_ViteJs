import React, { useEffect, useState } from "react";
import no_img from "../assets/error.jpg";
import { useOutletContext } from 'react-router-dom';
import '../App.css';

export default function News() {
  const { selectedNews, clearSelectedNews } = useOutletContext();
  const [myNews, setMyNews] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [typingTimeout, setTypingTimeout] = useState(null);

  const fetchNews = async (searchQuery) => {
    if (!searchQuery) return; // Skip fetching if no search query is provided

    try {
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&sortBy=published&language=en&apiKey=5e0bec6353114cc987ed659cf0241f97`
      );
      let data = await res.json();
      console.log("Full response data:", data);

      if (res.status === 200) {
        const filteredData = data.articles.filter(
          (article) =>
            article.title !== "[Removed]" && article.description !== "[Removed]"
        );

        setMyNews(filteredData);
        localStorage.setItem("newsData", JSON.stringify(filteredData));
        localStorage.setItem("newsFetchTime", Date.now());
        console.log("Fetched and filtered data from API:", filteredData);
      } else {
        console.error("Error fetching data from API:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    const searchNews = event.target.value;
    setInputValue(searchNews || selectedNews);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      fetchNews(searchNews || selectedNews || 'education'); // Default to 'education' if no query is provided
    }, 500);

    setTypingTimeout(newTimeout);
  };

  const clearInput = (event) => {
    event.preventDefault();
    setInputValue('');
    clearSelectedNews();
  };

  useEffect(() => {
    setInputValue(selectedNews || '');
    fetchNews(selectedNews || ''); // Ensure news is fetched when selectedNews changes
  }, [selectedNews]);

  useEffect(() => {
    const cachedData = localStorage.getItem("newsData");
    const cachedTime = localStorage.getItem("newsFetchTime");
    const fiveMinutes = 5 * 60 * 1000; // 5 minutes in ms

    if (cachedData && cachedTime && Date.now() - cachedTime < fiveMinutes) {
      setMyNews(JSON.parse(cachedData));
    } else {
      const query = selectedNews || 'education';
      fetchNews(query);
    }
  }, [selectedNews]);

  const filteredNews = myNews.filter((e) => e.urlToImage || e.title);

  console.log("Filtered News Array:", filteredNews);

  return (
    <div className="news">
      <form className="form">
        <button type="submit">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input
          className="input"
          placeholder="Type your text"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="reset" type="reset" onClick={clearInput}>
          <svg
            id="input-clear"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </form>
      <div className="card-container">
        {filteredNews.length > 0 ? (
          filteredNews.map((e) => (
            <div key={e.url} className="card" loading="lazy">
              <img
                src={e.urlToImage || no_img}
                className="card-img-top"
                alt="Image not found"
                onError={(e) => (e.target.src = no_img)}
              />
              <div className="card-body">
                <h5 className="card-title">{e.title || "No Title"}</h5>
                <p className="card-description">
                  {e.description || "No Description"}
                </p>
                <a
                  href={e.url}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))
        ) : (
          <div>No news articles found</div>
        )}
      </div>
    </div>
  );
}
