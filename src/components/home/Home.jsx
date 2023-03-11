import React from "react";
import { useState } from "react";
import { getAllNotices } from "../../services/everything";
import { NumberNotices } from "../NumberNotices";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [totalAuthors, setTotalAuthors] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await getAllNotices(search);

    const articles = resp.articles;
    const authors = new Set();
    articles.forEach((article) => {
      const author = article.author;
      if (author !== null && author !== "") {
        authors.add(author);
      }
    });
    setTotalResults(resp.totalResults);
    setTotalAuthors(authors.size);
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <div className="inner-container">
        <div div className="card">
          <form onSubmit={handleSubmit}>
            <input
              className="text-input"
              placeholder="Palabra clave"
              type="text"
              onChange={handleInput}
            />
            <input className="submit-input" type="submit" />
          </form>
        </div>
        <div className="text-container">
          <h1>
            <div className="text-noticia">
              Se encontraron <NumberNotices n={totalResults} /> noticias
            </div>
          </h1>
          <h1>
            <div className="text-noticia">
              De <NumberNotices n={totalAuthors}></NumberNotices>{" "}
              Autores/fuentes.
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
