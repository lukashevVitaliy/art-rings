import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Pagination = memo(({ page, totalPages, nextPage, prevPage }) => {
  return (
    <div className="mb-6 md:mb-12 text-sm md:text-base text-center font-light text-gray-400">
      <button
        type="button"
        className="mr-5 md:mr-10 hover:text-blue-600 transition-all"
        onClick={prevPage}
      >
        &lt; Предыдущая
      </button>
      <span>
        {page} of {totalPages}
      </span>
      <button
        type="button"
        className="ml-5 md:ml-10 hover:text-blue-600 transition-all"
        onClick={nextPage}
      >
        Следующая &gt;
      </button>
    </div>
  );
});

Pagination.displayName = 'Pagination';
export default Pagination;

// проверка данных props
Pagination.propsTypes = {
  totalPages: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  nextPage() {},
  prevPage() {},
};
