import React from "react";

const InputForm = props => (
  <form onSubmit={props.handleForm}>
    <div className="form-group">
      <label>Search Term:</label>
      <input 
        type="text" 
        className="form-control" 
        name="searchTerm"
        value={props.searchTerm}
        onChange={props.handleInputChange}
      />
    </div>
    <div className="form-group">
      <label>Start Year:</label>
      <input 
        type="text" 
        className="form-control" 
        name="startYear"
        value={props.startYear}
        onChange={props.handleInputChange}
      />
    </div>
    <div className="form-group">
      <label>End Year:</label>
      <input 
        type="text" 
        className="form-control" 
        name="endYear"
        value={props.endYear}
        onChange={props.handleInputChange}
      />
    </div>
    <button 
      type="submit" 
      className="btn btn-primary"
    >
      Submit
    </button>
  </form>
);

export default InputForm;