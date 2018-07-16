import axios from "axios";
require('dotenv').config();

const APIPath = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const Key = process.env.REACT_APP_NYT_KEY || "5a2591281104455bbd58d1f2c0b52168";
const dateTerminator ="1230"


export default {
  search: function (term, startYear, endYear) {
    if (term && startYear && endYear) {
      return axios.get(`${APIPath}?q=${term}&begin_date=${startYear}${dateTerminator}&end_date=${endYear}${dateTerminator}&api-key=${Key}`);
    }
    else if ( term && endYear){
      return axios.get(`${APIPath}?q=${term}&begin_date=1900${dateTerminator}&end_date=${endYear}${dateTerminator}&api-key=${Key}`);
    }
    else if ( term && startYear){
      return axios.get(`${APIPath}?q=${term}&begin_date=${startYear}${dateTerminator}&end_date=2100${dateTerminator}&api-key=${Key}`);
    }
    else if ( term){
      return axios.get(`${APIPath}?q=${term}&begin_date=1900${dateTerminator}&end_date=2100${dateTerminator}&api-key=${Key}`);
    }
  }
};