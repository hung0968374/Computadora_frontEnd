import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page_item">
            <a
              onClick={() => paginate(number)}
              href="/accessories"
              className="page_link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
