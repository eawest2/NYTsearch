import React from "react";

export const Results = props => (
  <div className="card" key={props._id}>
    <div className="card-body" >{props.headline}
      <button type="submit" data-date={props.date} data-url={props.url} className="btn btn-success float-right" id="save-art" onClick = {()=>props.saveArticle()}>Save</button>
    </div>
  </div>
)

export default Results;
