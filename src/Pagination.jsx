import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import _ from 'lodash';
import Paginate from './utilis/Paginate';
import PropTypes from 'prop-types';



const Pagination = (props) => {

    const {itemsCount,pageSize,currentPage,onPageChange}=props;
    const pagesCount = Math.ceil(itemsCount/pageSize)
    console.log(currentPage)

    if(pagesCount === 1) return null;

    const pages = _.range(1,pagesCount+1);
    

    return (
        <div style={{marginLeft:'40%'}}>
            <nav aria-label="Page navigation example">
  <ul class="pagination">
   {pages.map((page)=>(
    <li className={page === currentPage ? 'page-item active':'page-item'} key={page}><a class="page-link"  onClick={()=>onPageChange(page)}>{page}</a></li>
   ))}
  </ul>
</nav>
</div>
    );
};

Pagination.propTypes = {
    itemsCount:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired
}

export default Pagination