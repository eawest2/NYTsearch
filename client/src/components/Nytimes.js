import React from 'react';
import axios from 'axios';

const API_KEY = "e3e9bfd052284f8c86b6c5dbd5f9a1ed";

export default class Nytimes extends React.Component {
  state = {
    nytArticles: []
  }  

  componentDidMount() {
    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + API_KEY + "&q=dog&begin_date=20160101&end_date=20180101")
      .then(res => {
        console.log(res.data.response.docs);
        this.setState({ nytArticles: res.data.response.docs});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <ul>
        {this.state.nytArticles.map(article => 
          <li>{article.headline.main}</li>
        )}
      </ul>
    )
  }

}