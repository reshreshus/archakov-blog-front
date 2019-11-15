import React from 'react';

import './AddForm.scss';
import {Link} from 'react-router-dom'

const AddForm = () => {
  return (
    <div>
      <Link to={'/'}>
      <button className='btn btn-primary'>
        Back
      </button>
    </Link>
    <form className="add-form">
      <div className="form-group">
        <div className="add-form__row">
          <h4>
            <label for="title">Title</label>
          </h4>
          <input type="text" className="form-control" id="title" placeholder="Enter email" />
        </div>
        <div className="add-form__row">
          <h4>
            <label for="image">Image URL</label>
          </h4>
          <input type="text" className="form-control" id="image" placeholder="Enter image URL" />
        </div>
        <div className="add-form__row">
          <h4>
            <label for="description">Description</label>
          </h4>
          <textarea rows="8" className="form-control" placeholder="Enter text" id="description" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
};

export default AddForm;
