import React, { Component } from "react";
import "./Search.css";
import SearchResults from "../../Components/SearchResults/SearchResults";
import axios from 'axios';
import SearchForm from "../../Components/SearchForm/SearchForm";
// import ArticleCard from "../../Components/ArticleCard/ArticleCard";

// const API_KEY = process.env.REACT_APP_NYT_KEY;
const API_KEY = "e3e9bfd052284f8c86b6c5dbd5f9a1ed";

class Search extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    results: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    });
  };

  // loadArticles = () => {
  //   // axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + API_KEY + "&q=dog&begin_date=20160101&end_date=20180101")
  //   //   .then(res => {
  //   //     console.log(res.data.response.docs);
  //   //     this.setState({ results: res.data.response.docs});
  //   //     console.log(this.state.results);
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err);
  //   //   })

  //   return this.state.results.map(result => (
  //     <ArticleCard
  //       key={result.id}
  //       headline={result.headline.main}
  //       url={result.url}
  //       date={result.date}
  //     />
  //   ))
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${this.state.topic}&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}0101`;
    axios.get(url)
    .then(res => {
      console.log(res.data.response.docs);
      this.setState({ results: res.data.response.docs});
      console.log(this.state.results);
    })
    .catch(err => {
      console.log(err);
    })
    console.log(this.state.results);
  };

  render() {
    return (
      <div className="container">
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          topic={this.state.topic}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
        />
        {this.state.results.length ? (
          <SearchResults results={this.state.results} />
        ) : (
          <h2>No Artilces yet!</h2>
        )}
      </div>
    );
  }
};

export default Search;