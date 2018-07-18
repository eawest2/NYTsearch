import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';

const SearchResults = props => (
  <ul className="search-results">
    {props.results.map(result => (
      <li key={result} className="list-group-item">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{result.headline.main}</h5>
            <p className="card-text">{result.web_url}</p>
            <p className="card-text">{result.pub_date}</p>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </li>
    ))}
  </ul>
)

export default SearchResults;