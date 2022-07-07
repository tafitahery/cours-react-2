import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';

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

  return (
    <div className="news-container">
      <Logo />
      <Navigation />
      <h1>News</h1>

      <form>
        <input type="text" placeholder="nom" />
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Envoyer" />
      </form>
      <ul></ul>
    </div>
  );
};

export default News;
