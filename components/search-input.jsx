import React, { useContext, useState } from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Store } from '../utils/store';

const SearchInput = memo(() => {
  const [searchItem, setSearchItem] = useState('');
  const { dispatch } = useContext(Store);

  const handleClick = () => {
    if (searchItem) {
      dispatch({ type: 'SEARCH_RING', payload: searchItem });
    } else {
      dispatch({ type: 'SEARCH_RING', payload: '' });
    }
  };

  return (
    <div className="w-52 h-5 text-xs font-light text-gray-400 md:w-72 md:text-sm">
      <input
        id="name_search"
        name="name_search"
        type="text"
        placeholder="Поиск по артикулу"
        value={searchItem.toLowerCase()}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button className="w-5 outline-none" type="button" onClick={handleClick}>
        <FaSearch className="hover:text-blue-600 active:text-blue-900 transition-all" />
      </button>
    </div>
  );
});

SearchInput.displayName = 'SearchInput';
export default SearchInput;

SearchInput.propsTypes = {
  dispatch: PropTypes.func,
  handleClick: PropTypes.func,
};
SearchInput.defaultTypes = {
  handleClick() {},
};
