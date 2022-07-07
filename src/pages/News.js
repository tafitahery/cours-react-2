import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Articles from '../components/Articles';

const News = () => {
  const [newsData, setNewsDate] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('http://localhost:3003/articles')
      .then(({ data }) => setNewsDate(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3003/articles', {
      author: 'Denis',
      content: 'Hello les amis',
      date: Date.now(),
    });
  };

  return (
    <div className="news-container">
      <Logo />
      <Navigation />
      <h1>News</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="nom" />
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {newsData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Articles key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default News;
