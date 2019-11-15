import React from 'react';
import { Link } from 'react-router-dom';

import './FullPost.scss';

const PostItem = ({ title, createdAt, _id }) => (
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
);

export default PostItem;
