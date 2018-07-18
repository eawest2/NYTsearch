import React from 'react';
import './SearchForm.css';

const SearchForm = props =>  (
  <div className="container">
    <form className="search">
      <div className="form-group">
        <label htmlFor="topic">Topic:</label>
        <input
          value={props.topic}
          onChange={props.handleInputChange}
          name="topic"
          type="text"
          className="form-control"
          placeholder="Enter a topic of interest"
        />
        <br />
        <br />
        <label htmlFor="startYear">Start Year:</label>
        <input
          value={props.startYear}
          onChange={props.handleInputChange}
          name="startYear"
          type="text"
          className="form-control"
          placeholder="Enter a startYear of interest"
        />
        <br />
        <br />
        <label htmlFor="endYear">End Year:</label>
        <input
          value={props.endYear}
          onChange={props.handleInputChange}
          name="endYear"
          type="text"
          className="form-control"
          placeholder="Enter a endYear of interest"
        />
        <br />
        <br />
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  </div>
)

export default SearchForm;