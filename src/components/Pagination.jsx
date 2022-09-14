import React from 'react';

export const Pagination = ({ postsPerPage, totalPosts, paginateFront, paginateBack, currentPage, }) => {


  return (
    <div className='py-2'>
      <div>
        <p className='text-sm text-gray-700 mx-1'>
          Mostrando del
          <span className='font-medium mx-1'>{currentPage * postsPerPage - 2}</span>
          al
          <span className='font-medium mx-1'> {currentPage * postsPerPage} </span>
          de
          <span className='font-medium'> {totalPosts} </span>
          resultados totales
        </p>
      </div>
      <nav className='block'></nav>
      <div>
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <a
            onClick={() => {
              paginateBack();
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Anterior</span>
          </a>

          <a
            onClick={() => {
              paginateFront();
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Siguiente</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className='text-gray-700 font-semibold text-xl mb-2 border p-2'
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default { Pagination, Posts};