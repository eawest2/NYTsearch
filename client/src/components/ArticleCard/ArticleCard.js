import React from "react";

const ArticleCard = props => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.headline}</h5>
      <p className="card-text">{props.web_url}</p>
      <p className="card-text">{props.pub_date}</p>
      <button className="btn btn-primary">Save</button>
    </div>
  </div>
);

export default ArticleCard;