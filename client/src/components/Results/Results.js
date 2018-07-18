import React from "react";

export const Results = props => (
  <div className="card my-1 bg-light text-secondary" key={props._id}>
    <div className="card-body" >
      <a href={props.url} target="_blank" className="results-link">{props.headline}</a>
      <button type="submit" data-date={props.date} data-url={props.url} className="btn btn-success float-right" id="save-art" onClick = {()=>props.saveArticle()}>Save</button>
    </div>
  </div>
)

export default Results;
