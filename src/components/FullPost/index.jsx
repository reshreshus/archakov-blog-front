import React from 'react';
import { Link } from 'react-router-dom';

import './FullPost.scss';

const PostItem = ({ text, createdAt}) => (
  <div className="full-post">
    <Link to={'/'}>
      <button className='btn btn-primary'>
        Back
      </button>
    </Link>
    <p>
      <i>Posted on {createdAt}</i>
    </p>
    <br/>
    <p>
    {text}
    </p>
  </div>
);

export default PostItem;
