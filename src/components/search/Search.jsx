import React, { useState } from "react";
import "./Search.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getTopHeadlinesFilter } from "../../services/topHeadlines";
import { categories } from "./category";
import { countries } from "./countries";

const Search = () => {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState([]);

  const handleCountries = (option) => {
    setCountry(option.value);
  };
  const handleCategories = (option) => {
    setCategory(option.value);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleReset = () => {
    setCountry("");
    setCategory("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await getTopHeadlinesFilter(search, country, category);
    setArticles(resp.articles);
  };

  return (
    <div className="container">
    <div className="card black">
		  <div className="card white">
			  <form>
        <input
                className=" form-group text-input "
                onChange={handleSearch}
                type="text"
                placeholder="Palabra clave"
              />
              <input
              
                className="form-group submit-input"
                onClick={handleSubmit}
                type="submit"
                value="Buscar"
              />
			  </form>
        <hr />
			  <div className="dropdown-container">
        <Dropdown
                className="dropdown form-group"
                  options={countries}
                  onChange={handleCountries}
                  value={country}
                  placeholder="Pais"
                />
                <Dropdown
                className="dropdown form-group"
                  options={categories}
                  onChange={handleCategories}
                  value={category}
                  placeholder="Categoría"
                />
                <input
                  className="form-group submit-input"
                  onClick={handleReset}
                  type="reset"
                  value="Limpiar"
                />
			  </div>
		  </div>
		  <div className="card white">
      {articles.length > 0 ? (
              <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Autor</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map(function (article) {
                    return (
                      <tr>
                        <td>
                          {article.urlToImage === null ? (
                            <img
                              src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                              alt="..."
                            />
                          ) : (
                            <img src={article.urlToImage} alt="..." />
                          )}
                        </td>
                        <td>{article.title}</td>
                        <td>{article.description}</td>
                        <td >{article.author}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
            ) : (
              <div>
                <h1 className="no-notices">No hay noticias disponibles</h1>
              </div>
            )}
		  </div>
	  </div>
    </div>
  );
};

export default Search;
