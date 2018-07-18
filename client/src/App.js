import React, { Component } from 'react';
import Jumbotron from "./Components/Jumbotron";
import InputForm from "./Components/InputForm";
import Results from "./Components/Results";
import API from "./utils/API";
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


class App extends Component {
  state = {
    searchTerm: "",
    startYear:"",
    endYear: "",
    results: [],
    saved: [],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleForm = event => {
    event.preventDefault();
    console.log(this.state.searchTerm, this.state.startYear, this.state.endYear);
    this.searchAPI(this.state.searchTerm, this.state.startYear, this.state.endYear);
    
    this.setState({ searchTerm: "", startYear: "", endYear: "" });
  };

  searchAPI = (term, startYear, endYear) => {
    API.search(term, startYear, endYear)
    .then((res) => {
      this.setState({ results: res.data.response.docs});
      console.log(this.state.results);
    })
    .catch(err => console.log(JSON.stringify(err)
    ));
    
  };
    

  render() {
    return (
      <div className="container-fluid">
        <Jumbotron>
          <h1>New York Times Article Scraper</h1>
        </Jumbotron>

        <div className="row">
          <div className="col-12">

            <div className="card">
              <h5 className="card-header">Search</h5>
              <div className="card-body">
                <InputForm 
                  searchTerm={this.state.searchTerm}
                  startYear={this.state.startYear}
                  endYear={this.state.endYear}
                  handleInputChange={this.handleInputChange}
                  handleForm={this.handleForm}
                />
              </div>
            </div>

            <div className="card">
              <h5 className="card-header">Results</h5>
              <div className="card-body">
                {this.state.results.map(result => (
                  <Results 
                    key={result._id}
                    id={result._id}
                    headline={result.headline.main}
                    saveArticle={this.saveArticle}
                    url={result.url}
                    date={result.date}
                  />
                ))}
              </div>
            </div>

            <div className="card">
              <h5 className="card-header">Saved Articles</h5>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">Saved 1
                    <button type="submit" className="btn btn-danger float-right" id="delete-art">Remove</button>
                  </li>
                  <li className="list-group-item">Saved 2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
