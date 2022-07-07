import React from 'react';

const Articles = ({ article }) => {
  const dataParser = (date) => {
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    return newDate;
  };

  return (
    <div className="article">
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dataParser(article.date)}</em>
      </div>
      <p>{article.content}</p>
      <div className="btn-container">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Articles;
