import React, { memo } from 'react';
import HeaderLevel_1 from './header-level-1';
import HeaderLevel_2 from './header-level_2';
import HeaderLevel_3 from './header-level_3';
import HeaderLevel_4 from './header-level_4';

const Header = memo(() => {
  return (
    <>
      <HeaderLevel_1 />
      <HeaderLevel_2 />
      <HeaderLevel_3 />
      <HeaderLevel_4 />
    </>
  );
});

Header.displayName = 'Header';
export default Header;
