import React from 'react';
import CustomHeader from '../header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <CustomHeader
        links={[
          { link: '/search', label: 'search' },
          { link: 'liked', label: 'like' },
        ]}
      />
      <Outlet />
    </div>
  );
};

export default Root;
