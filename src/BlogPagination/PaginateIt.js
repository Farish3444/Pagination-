import _ from 'lodash';

import React from 'react'

const PaginateIt = ({postPerPage,totalPost,paginate}) => {

    const pageNumbers = [];
    const postsPerPage = 10
    const totalPosts = 50

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }


    return (
        <div>
            <nav>
            <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
            </nav>
        </div>
    )
}

export default PaginateIt

