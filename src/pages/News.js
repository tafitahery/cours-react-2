import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Articles from '../components/Articles';

const News = () => {
  const [newsData, setNewsDate] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, [content]);

  const getData = () => {
    axios
      .get('http://localhost:3003/articles')
      .then(({ data }) => setNewsDate(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      axios
        .post('http://localhost:3003/articles', {
          author,
          content,
          date: Date.now(),
        })
        .then(() => {
          setAuthor('');
          setContent('');
          setError(false);
        });
    }
  };

  return (
    <div className="news-container">
      <Logo />
      <Navigation />
      <h1>News</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type="text"
          placeholder="nom"
        />
        <textarea
          style={{ border: error ? '1px solid red' : '1px solid #61dafb' }}
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="Message"
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
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
